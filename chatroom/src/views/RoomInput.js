import React, { Component } from 'react';
import fire from '../fire'
import {Input,Button} from 'antd'

const db = fire.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);



class RoomInput extends Component {


  state={
  
  }
 

  render() {
    return (
      <div></div>
    );
  }
}

export default RoomInput;
