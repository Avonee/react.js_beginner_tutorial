import React, { Component } from 'react';
import { Button,Input,Checkbox } from 'antd';
import './App.css';
import TodoItem from '../components/TodoList/TodoItem'
import TodoFooter from '../components/TodoList/TodoFooter'
import TodoForm from '../components/TodoForm/TodoForm'

class App extends Component {

  state={
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
    this.setState({todos,notDoneCount});
  }

  handleChange=(e)=>{
    this.setState({inputWord:e.target.value})
  }

  add=()=>{
    let todos = this.state.todos;
    let notDoneCount = this.state.notDoneCount
    todos.push({
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
            return(
              <TodoItem key={i} todo={todo} handleChangeChecked={this.handleChangeChecked(i)} />
            )
          })
        }
        <TodoFooter notDoneCount={this.state.notDoneCount} todosLength={this.state.todos.length}/>
        
        <TodoForm inputWord={this.state.inputWord} handleChange={this.handleChange} add={this.add}/>
      </div>
    );
  }
}

export default App;
