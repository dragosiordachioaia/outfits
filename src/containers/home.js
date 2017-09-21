import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Cookies from 'universal-cookie';

import * as actions from '../actions/actions';

class Home extends Component {
  constructor() {
    super();
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    if(this.props.elements.length === 0) {
      this.props.getAllElements();
    }

    const cookies = new Cookies();
    if(cookies.get('token')) {
      this.props.markAsLoggedIn({
        token: cookies.get('token'),
        username: cookies.get('username'),
      });
    }
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
          <div>
            <Link to="/create">
              <button>Create new outfit</button>
            </Link>
            <Link to="/browse">
              <button>Browse outfits</button>
            </Link>
            <Link to="/upload">
              <button>Add images</button>
            </Link>
          </div>
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
    markAsLoggedIn: actions.markAsLoggedIn,
    logOut: actions.logOut,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
