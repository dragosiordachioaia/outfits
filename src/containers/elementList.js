import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

class ElementList extends Component {
  constructor() {
    super();
    this.state = {elemName: ""};
    this.onButtonClick = this.onButtonClick.bind(this);
    this.submitNewElement = this.submitNewElement.bind(this);
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
    this.props.addElement(this.state.elemName);
  }

  submitNewElement(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitNewElement}>
          <input
            value={this.state.elemName}
            onChange={e => this.setState({elemName: e.target.value})}
            placeholder="Element name here"
          />
        </form>
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
