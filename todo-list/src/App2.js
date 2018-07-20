import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
    // todos:[{
    //   key:'0001',
    //   description:'洗澡',
    //   done:false,
    // },{
    //   key:'0002',
    //   description:'刷牙',
    //   done:false,
    // }],
    todos:[],
    notDoneCount:0,
    inputWord:'',
  }

  handleChangeChecked=(todoId)=>()=> {
    let todos = this.state.todos;
    let notDoneCount=0
    todos.forEach((todo,index) => {
      if(index==todoId){
        todos[index].done = todos[index].done === true ? false : true;
      }
      if(todo.done==false){
        notDoneCount=notDoneCount+1
      }
    });
    console.log(todos)
    this.setState({todos,notDoneCount});
  }

  handleChange=(e)=>{
    this.setState({inputWord:e.target.value})
  }

  add=()=>{
    let todos = this.state.todos;
    let notDoneCount = this.state.notDoneCount
    todos.push({
      key:'123123',
      description:this.state.inputWord,
      done:false,
    })
    notDoneCount=notDoneCount+1
    this.setState({todos,notDoneCount,inputWord:''})
  }

  render() {
    return (
      <div style={{textAlign:'center'}}> 
      React Todo List
      {
        this.state.todos.map((todo,i)=>{
          return(<div  key={i}>
            <input type="checkbox" defaultChecked={todo.done} onChange={this.handleChangeChecked(i)}></input>
            <a style={todo.done?{textDecoration:'line-through'}:{textDecoration:'none'}}>{todo.description}</a>
          </div>)
        })
      }
      <div>
        {this.state.notDoneCount}未完成/{this.state.todos.length}總數
      </div>
      <div style={{paddingTop:'50px'}}>
        <input value={this.state.inputWord} onChange={this.handleChange}/> <button onClick={this.add}>新增任務</button>
      </div>
      </div>
    );
  }
}

export default App;
