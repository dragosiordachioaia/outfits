import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Picker from 'components/picker';

class Create extends Component {
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
        <h2>Create outfit</h2>
        <Picker
          onPrev={()=>{}}
          onNext={()=>{}}
          imageSource="https://i.pinimg.com/736x/d9/cf/f3/d9cff313be8e969d0238788590c6b838--red-blouses-chiffon-blouses.jpg"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Create);
