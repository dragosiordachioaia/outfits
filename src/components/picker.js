import React, {Component} from 'react';

export default class Picker extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.onPrev}> {"<"} </button>
        <img src={this.props.imageSource}/>
        <button onClick={this.props.onNext}> {">"} </button>
      </div>
    );
  }
}
