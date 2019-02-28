import React, { Component } from 'react';
import Notification from "./notif.js";
import Confirm from "./confirm.js";


class QuestionContainer extends Component {

  constructor(props){
    super(props);
    this.state={
      ans:false,
      conf:false,

        }
      }

    showAnswer=()=>{

      this.setState({
        ans:true
      });

    }

    accept=()=>{

      this.setState({
        conf:true
      });

    }
    decline=()=>{
       this.setState({
        conf:false,
        ans:false
      });
    }

  render() {
    
    return (
       <div>
          <Notification message ={this.props.question} type ={this.props.type}/>
           
           <button onClick={this.showAnswer} style={{display:"inline-block"}}>
               Show Answer
           </button>

           <div >
              {this.state.ans && <Confirm accept={this.accept} decline={this.decline} />}
           </div>

           <div >
             { this.state.conf && <p>{this.props.answer}</p>}
           </div>

         </div>
      );
  }
}

export default QuestionContainer;
