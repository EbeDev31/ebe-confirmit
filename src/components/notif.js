
import React, { Component } from 'react';


class Notif extends Component {

   constructor(props){
    super(props);
    this.state={
            mess:this.props.message,
            type:"error"
     
    }
  }

 renderMsg=()=>{
    let type= this.props.type;
    let mess= this.props.message;
    let msgDiv=<div ></div>;

    let bgColor="white";

    switch(type) {
              case "success":
               bgColor="green";
                break;

              case "warning":
                bgColor="orange";
                break;

              case  "error":
                bgColor="red";
                break;

              case "info":
                 bgColor="blue";
                break;
              default:
                 bgColor="blue";
               
            }
    
         
                console.log(bgColor);
                 msgDiv= <div>
                        <div style={{backgroundColor:bgColor}}>
                              <p style={{color:"white"}}>{mess}</p>
                            </div>
                    </div>
            
     
    
    return msgDiv;
}
  render() {
    
    return (
       <div>
        {this.renderMsg()}
       </div>
      );
  }
}

export default Notif;
