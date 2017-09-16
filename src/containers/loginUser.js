import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

class LoginUser extends Component {
  constructor() {
    super();
    this.state = {username: "aaa", password: "bbbb"};
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidUpdate() {
    if(this.props.auth.token) {
      this.context.router.history.push('/');
    }
  }

  submitForm(event) {
    event.preventDefault();
    this.props.loginUser({
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div>
        <h2>Login Page</h2>
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
            Login
          </button>
        </form>
      </div>
    );
  }
}

LoginUser.contextTypes = {
    router: React.PropTypes.object.isRequired
}


function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginUser: actions.loginUser,
    fancyAction: actions.fancyAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);
