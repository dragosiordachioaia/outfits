import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

class RegisterUser extends Component {
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
        <h2>Register Page</h2>
        {this.props.auth.token}
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}
            placeholder="Username..."
          />
          <input
            type="password"
            value={this.state.password}
            onChange={e => this.setState({password: e.target.value})}
            placeholder="Password..."
          />
          <button type="submit">
            Create user
          </button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
