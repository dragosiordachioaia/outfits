import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

class Upload extends Component {
  constructor() {
    super();
    this.state = {src: "", type: ""};
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    // this.props.registerUser({
    //   username: this.state.username,
    //   password: this.state.password,
    // });
    this.props.addImage({
      src: this.state.src,
      type: this.state.type,
    });


  }

  render() {
    return (
      <div>
        <h2>Upload Image</h2>
        <form onSubmit={this.submitForm}>
          <input
          placeholder="Type of garment..."
          value={this.state.type}
          onChange={e => this.setState({type: e.target.value})}/>
          <input
          placeholder="Image source..."
          value={this.state.src}
          onChange={e => this.setState({src: e.target.value})}/>
          <button type="submit"> Submit </button>
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
    addImage: actions.addImage,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
