import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Notification from "./notif.js";

class Notif extends Component {

  constructor(props){
    super(props);
    this.state={
      clicked:false,
       conf :{
            message:"Hello World",
            type:"error",
            accept:function(){},
            decline:function(){},
          }

    }
  }

/*
  accept=()=>{

    this.props.accept;
    //console.log("Say my name Start");
  }
  decline=()=>{
    this.props.decline;
    //console.log("Say my name End");
  }
*/
  show=()=>{

    if (this.state.clicked){
          return (<div>
              
             </div>);
    }
    else{
        return (
          <div>
             <div>


            <Button variant="success" onClick={this.props.accept} >
            
               SURE
             </Button>
             </div>

             <div>
              <Button variant="danger" onClick={this.props.decline} >
            
               NO THANKS
             </Button>
             </div>
         </div>);

    }
  }

  render() {
    
    return (
    <div>
            {this.show()}
           </div>
       
      );
  }
}

export default Notif;
