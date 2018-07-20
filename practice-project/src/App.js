import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    name:'',
    input:''
  }
  componentDidMount=()=>{

  }
  hello=()=>{
    this.setState({name:this.state.input})
  }
  handleChange=(e)=> {
    this.setState({ input: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange}></input>
        <button onClick={this.hello}>click</button>
        <div>
            即時顯示：{this.state.input}
        </div>
        <div>
            你輸入的是：{this.state.name}
        </div>
      </div>
    );
  }
}

export default App;
