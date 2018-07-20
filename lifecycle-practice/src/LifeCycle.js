import React, { Component } from 'react';

class LifeCycle extends Component {

  state={
    name:''
  }

  handleClick=()=> {
    this.setState({'name': 'Zuck'});
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    return (
      <div onClick={this.handleClick}>Hi, {this.state.name}</div>
    );
  }
}

export default LifeCycle;