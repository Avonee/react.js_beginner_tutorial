import React, { Component } from 'react';
import { Button,Input,Checkbox } from 'antd';

class TodoItem extends Component {
  render(){
    return(
      <div>
        <Checkbox type="checkbox" defaultChecked={this.props.todo.done} onChange={this.props.handleChangeChecked}></Checkbox>
        <p style={this.props.todo.done?{textDecoration:'line-through',display: 'inline'}:{textDecoration:'none',display: 'inline'}}>{this.props.todo.description}</p>
      </div>
    )
  }
}

export default TodoItem