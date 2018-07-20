import React, { Component } from 'react';
import { Button,Input,Checkbox } from 'antd';

class TodoForm extends Component {
  render(){
    return(
      <div style={{paddingTop:'50px'}}>
        <Input style={{ width: '200px'}} value={this.props.inputWord} onChange={this.props.handleChange}/> 
        <Button onClick={this.props.add}>新增任務</Button>
      </div>
    )
  }
}

export default TodoForm