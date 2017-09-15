#!/bin/bash

# setup a virtual environment, where we can then install all of the python dependencies
virtualenv -p python3 venv

# activate the virtual environment (to deactivate, simply run "deactivate")
source ./venv/bin/activate

# install the python dependencies
pip install -r requirements.txt

# we need the FLASK_APP environment variable in order to be able to run the application
export FLASK_APP='app.py'

# install the front-end dependencies, as listed in package.json and yarn.lock
yarn install
