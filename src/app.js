import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from 'containers/home';
import ElementDetails from 'containers/elementDetails';
import RegisterUser from 'containers/registerUser';
import LoginUser from 'containers/loginUser';
import Create from 'containers/create';
import Browse from 'containers/browse';
import Upload from 'containers/upload';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="main-content">
            <Route exact path="/" component={Home} />
            <Route exact path="/element/:id" component={ElementDetails} />
            <Route exact path="/register" component={RegisterUser} />
            <Route exact path="/login" component={LoginUser} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/upload" component={Upload} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
