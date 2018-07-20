import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    name:'',
    input:'',
    // input2:'',
    // name2:'',
    // sentence:''
  }
  componentDidMount=()=>{
  }
  hello=()=>{
    this.setState({name:this.state.input})
  }
  // hello2=()=>{
  //   this.setState({name2:this.state.input+'好棒喔！'})
  // }
  // hello3=()=>{
  //   this.setState({sentence:this.state.input+'愛'+this.state.input2})
  // }
  handleChange=(e)=> {
    this.setState({ input: e.target.value });
  }
  // handleChange2=(e)=>{
  //   this.setState({input2:e.target.value});
  // }
  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange}></input>
        {/*
        <input onChange={this.handleChange2}></input>
        */}
        <div>
            即時顯示：{this.state.input}
        </div>
        <button onClick={this.hello}>click</button>
        <div>
            你輸入的名字：{this.state.name}
        </div>
        {/*
        <button onClick={this.hello2}>click</button>
        <div>
            好心情對話：{this.state.name2}
        </div>

        <button onClick={this.hello3}>click</button>
        <div>
            羞羞臉對話：{this.state.sentence}
        </div>
        */}
      </div>
    );
  }
}

export default App;
