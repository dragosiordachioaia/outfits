import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

class Browse extends Component {
  constructor() {
    super();
    this.state = {username: "", password: ""};
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    this.props.registerUser({
      username: this.state.username,
      password: this.state.password,
    });

  }

  render() {
    return (
      <div>
        <h2>Browse Page</h2>
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
    registerUser: actions.registerUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
