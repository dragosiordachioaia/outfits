# outfits

App for creating/managing outfits.
Tech stack:
- Back-end:
  - Python, Flask, TinyDB
- Front-end:
  - React, Redux, Webpack


## To run the app:
- clone the repo
- navigate to it in terminal

```{r, engine='bash', count_lines}
brew install python3 yarn
```
```{r, engine='bash', count_lines}
pip3 install virtualenv
```
```{r, engine='bash', count_lines}
source ./setup.sh
```
```{r, engine='bash', count_lines}
export FLASK_APP=app.py
```
```{r, engine='bash', count_lines}
flask run
```


- open a new terminal window
- navigate to the project folder
```{r, engine='bash', count_lines}
npm start
```
- fire up a web browser and go to http://127.0.0.1:5000/
