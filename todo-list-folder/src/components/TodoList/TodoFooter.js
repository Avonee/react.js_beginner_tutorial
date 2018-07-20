import React, { Component } from 'react';
import { Button,Input,Checkbox } from 'antd';

class TodoFooter extends Component {
  render(){
    return(
      <div>
        <h3 style={{paddingTop:'20px'}}>{this.props.notDoneCount}未完成/{this.props.todosLength}總數</h3>
      </div>
    )
  }
}

export default TodoFooter




