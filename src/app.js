import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ElementList from 'containers/elementList';
import ElementDetails from 'containers/elementDetails';
import RegisterUser from 'containers/registerUser';
import LoginUser from 'containers/loginUser';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="main-content">
            <Route exact path="/" component={ElementList} />
            <Route exact path="/element/:id" component={ElementDetails} />
            <Route exact path="/register" component={RegisterUser} />
            <Route exact path="/login" component={LoginUser} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
