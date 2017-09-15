import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions/actions';

class ElementDetails extends Component {
  render() {
    const activeElementId = this.props.match.params.id;
    const activeElement = this.props.elements.find(
      elem => parseInt(elem.id, 10) === parseInt(activeElementId, 10)
    );

    return (
      <div>
        <Link to="/">
          Go to Home Page
        </Link>
        <h1> These are the details for {activeElement.name}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    elements: state.elements,
  }
}

export default connect(mapStateToProps)(ElementDetails);
