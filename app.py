from flask import Flask, render_template, request, jsonify
from flask_caching import Cache
from tinydb import TinyDB, Query
from flask_cors import CORS
from passlib.hash import pbkdf2_sha256
import jwt

app = Flask(__name__)
db = TinyDB('db.json')
elements = db.table('elements')
users = db.table('users')
secret = 'secret'

CORS(app)
# Check Configuring Flask-Caching section for more details
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data.get('username'):
        return jsonify({"error": "The request needs to have a username"}), 400
    if not data.get('password'):
        return jsonify({"error": "The request needs to have a password"}), 400
    hash = pbkdf2_sha256.hash(data['password'])
    new_user = {
        "username": data['username'],
        "password": hash,
    }
    users.insert(new_user)
    return jsonify({"message": "User Added"})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data.get('username'):
        return jsonify({"error": "The request needs to have a username"}), 400
    if not data.get('password'):
        return jsonify({"error": "The request needs to have a password"}), 400
    User = Query()

    valid_user = None
    for user_row in users.all():
        password_matches = pbkdf2_sha256.verify(data['password'], user_row['password'])
        if password_matches:
            valid_user = user_row

    if valid_user:
        encoded_token = jwt.encode({"some": "payload"}, secret, algorithm='HS256')
        return jsonify({
            "token": encoded_token.decode('utf-8'),
            "username": data['username'],
        })
    return jsonify({"error": "Username and/or password incorrect"}), 404

@app.route('/api/users')
def list_users():
    return jsonify({"users": users.all()})

@app.route('/api/elements')
# @cache.cached(timeout=10)
def get_all_elements():
    return jsonify(elements.all())

@app.route('/api/element', methods=['POST'])
def add_element():
    next_index = len(elements) + 1
    data = request.get_json()
    data['id'] = next_index
    elements.insert(data)
    return jsonify(data)

@app.route('/')
@cache.cached(timeout=3600)
def home():
    return render_template('index.html')

@app.route("/<path:path>")
@cache.cached(timeout=3600)
def serve_home(path):
    return render_template('index.html')
