#!/bin/bash

# remove the cache of python dependencies
rm -rf __pycache__

# remove the front-end javascript dependencies
rm -rf node_modules

# deactivate the python virtual environment
deactivate

# delete the python virtual environment
rm -rf venv
