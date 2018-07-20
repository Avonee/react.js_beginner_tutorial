import React, { Component } from 'react';
import { Button,Input,Checkbox } from 'antd';
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

  handleChangeChecked=(todoId)=> {
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
      <div style={{paddingTop:'50px',textAlign:'center'}}> 
      <h1>React Todo List</h1>
      {
        this.state.todos.map((todo,i)=>{
          return(<div  key={i}>
            <Checkbox type="checkbox" defaultChecked={todo.done} onChange={()=>this.handleChangeChecked(i)}></Checkbox>
            <p style={todo.done?{textDecoration:'line-through',display: 'inline'}:{textDecoration:'none',display: 'inline'}}>{todo.description}</p>
          </div>)
        })
      }
      <div>
        <h3 style={{paddingTop:'20px'}}>{this.state.notDoneCount}未完成/{this.state.todos.length}總數</h3>
      </div>
      <div style={{paddingTop:'50px'}}>
        <Input style={{ width: '200px'}} value={this.state.inputWord} onChange={this.handleChange}/> 
        <Button onClick={this.add}>新增任務</Button>
      </div>
      </div>
    );
  }
}

export default App;
