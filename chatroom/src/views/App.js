import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from '../fire'
import {Input,Button} from 'antd'

const db = fire.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);



class App extends Component {


  state={
    messages:[],
    nameValue:'',
    messageValue:'',
  }

  handleChangeName=(e)=>{
    this.setState({nameValue:e.target.value})
  }

  handleChangeMessage=(e)=>{
    this.setState({messageValue:e.target.value})
  }

  handleClick=()=>{
    var addDoc = db.collection('chatroom').doc('chatroom01').collection('messages').add({
      username:this.state.nameValue ,
      messageText:this.state.messageValue,
      timestamp:new Date(),
    }).then(ref => {
      console.log('Added document with ID: ', ref.id);
      this.setState({messageValue:''})
    });
  }

  componentDidMount=()=>{
    let Ref = db.collection('chatroom').doc('chatroom01').collection('messages').orderBy('timestamp');
    Ref.onSnapshot((snapshot) => {
      let messages = this.state.messages
      snapshot.docChanges().forEach(change => {
        if(change.type=='added'){
          console.log(change.doc.id, '=>', change.doc.data());
          messages.push(change.doc.data())
        }
      });      
      this.setState({messages:messages})
      window.scrollTo(0, 9999)
    });
  }

 

  render() {
    return (
      <div className="App" style={{textAlign:'center'}}>
        <div>
        {
          this.state.messages.map((message,i)=>{
            return(<p id='messages' key={i}>{message.username}: {message.messageText}</p>)
          })
        }
        </div>
        <div>
          <Input placeholder="輸入名字..." value={this.state.nameValue} style={{display:'inline',width:'150px'}} onChange={this.handleChangeName}></Input>
          <Input placeholder="輸入訊息..." value={this.state.messageValue} style={{display:'inline',width:'500px'}} onChange={this.handleChangeMessage}></Input>
          <Button onClick={this.handleClick}>送出</Button>
        </div>
      
      </div>
    );
  }
}

export default App;
