import React, {Component} from 'react';

export default class Picker extends Component {
  render() {
    let btnPrev;
    let btnNext;
    if(this.props.crtIndex > 0) {
      btnPrev = <button onClick={this.props.onPrev}> {"<"} </button>;
    }
    if(this.props.crtIndex < this.props.limit - 1) {
      btnNext = <button onClick={this.props.onNext}> {">"} </button>;
    }
    return(
      <div>
        {btnPrev}
        <img src={this.props.imageSource}/>
        {btnNext}
      </div>
    );
  }
}
