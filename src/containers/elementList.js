import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

class ElementList extends Component {
  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    this.props.getAllElements();
  }

  displayElemList(elements) {
    return elements.map(element => (
      <Link key={element.id} to={`/element/${element.id}`}>
        <p>{element.name}</p>
      </Link>
    ));
  }

  onButtonClick() {
    this.props.addElement();
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Add element</button>
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
    addElement: actions.addElement,
    getAllElements: actions.getAllElements,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ElementList);
