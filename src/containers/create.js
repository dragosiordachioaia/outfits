import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Picker from 'components/picker';

class Create extends Component {
  constructor() {
    super();
    this.state = {topIndex: 0, bottomIndex: 0, shoesIndex: 0};
    this.submitForm = this.submitForm.bind(this);
    this.prevTop = this.prevTop.bind(this);
    this.nextTop = this.nextTop.bind(this);
  }

  componentDidMount() {
    if(this.props.images.length === 0) {
      this.props.getImages();
    }
  }

  submitForm(event) {
    event.preventDefault();
    this.props.registerUser({
      username: this.state.username,
      password: this.state.password,
    });

  }

  prevTop() {
    this.setState({topIndex: this.state.topIndex - 1})
  }

  nextTop() {
    this.setState({topIndex: this.state.topIndex + 1})
  }

  render() {
    if(this.props.images.length === 0) {
      return <p>Loading...</p>
    }
    return (
      <div>
        <h2>Create outfit</h2>
        <Picker
          onPrev={this.prevTop}
          onNext={this.nextTop}
          imageSource={this.props.images[this.state.topIndex].src}
          crtIndex={this.state.topIndex}
          limit={this.props.images.length}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getImages: actions.getImages,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
