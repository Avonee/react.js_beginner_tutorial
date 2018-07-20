import React, { Component } from 'react';
import { Button,Input,Checkbox } from 'antd';
import { connect } from 'react-redux'

class TodoForm extends Component {
  render(){
    return(
      <div style={{paddingTop:'50px'}}>
        <Input placeholder={this.props.name+'快來增加任務吧...'} style={{ width: '200px'}} value={this.props.inputWord} onChange={this.props.handleChange}/> 
        <Button onClick={this.props.add}>新增任務</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name
  };
};


export default connect(mapStateToProps)(TodoForm);
