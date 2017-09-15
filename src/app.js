import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ElementList from 'containers/elementList';
import ElementDetails from 'containers/elementDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="main-content">
            <Route exact path="/" component={ElementList} />
            <Route exact path="/element/:id" component={ElementDetails} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
