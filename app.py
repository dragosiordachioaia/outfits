from flask import Flask, render_template, request, jsonify
from tinydb import TinyDB
from flask_cors import CORS

app = Flask(__name__)
db = TinyDB('db.json')
CORS(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/elements')
def get_all_elements():
    elements = db.all()
    return jsonify(elements)

@app.route('/element', methods=['POST'])
def add_element():
    elements = db.all()
    next_index = len(elements) + 1
    data = request.get_json()
    data['id'] = next_index
    db.insert(data)
    return jsonify(data)
