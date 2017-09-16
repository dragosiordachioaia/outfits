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
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    if(this.props.elements.length === 0) {
      this.props.getAllElements();
    }
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

  logOut() {
    this.props.logOut();
  }

  displayLoginButton(auth) {
    let result;
    if(auth.token) {
      result = (
        <div>
          <p>Hello {this.props.auth.username}!</p>
          <button onClick={this.logOut}>Log out</button>
        </div>
      );
    } else {
      result = (
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      )
    }
    return result;
  }

  render() {
    return (
      <div>
        {this.displayLoginButton(this.props.auth)}
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
    auth: state.auth,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addElement: actions.addElement,
    getAllElements: actions.getAllElements,
    logOut: actions.logOut,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ElementList);
