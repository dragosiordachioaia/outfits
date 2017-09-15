from flask import Flask, render_template
from tinydb import TinyDB

app = Flask(__name__)
db = TinyDB('db.json')

@app.route('/')
def home():
    return render_template('index.html')
