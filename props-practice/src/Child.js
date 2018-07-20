import React, { Component } from 'react';


class Child extends Component {


  
  render() {
    return (
      <div>
        this is Child, his name is {this.props.name}
        <button onClick={this.props.changeBackgroundFun('blue')}>click</button>
      </div>

    )
  }
}

export default Child;