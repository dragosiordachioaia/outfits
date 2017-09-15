import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

class DummyContainer extends Component {
  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  displayElemList(elements) {
    return elements.map(element => (
      <Link key={element.id} to={`/element/${element.id}`}>
        <p>{element.name} {element.id}</p>
      </Link>
    ));
  }

  onButtonClick() {
    this.props.action1()
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Add element</button>
        <Link to="/elem1">
          <p>Go to elem1</p>
        </Link>
        {this.displayElemList(this.props.elements)}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    elements: state.elements,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    action1: actions.action1
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DummyContainer);
