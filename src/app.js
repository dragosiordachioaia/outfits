import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import DummyContainer from 'containers/dummyContainer';
import ElementDetails from 'containers/elementDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="main-content">
            <Route exact path="/" component={DummyContainer} />
            <Route exact path="/element/:id" component={ElementDetails} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
