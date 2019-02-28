import React, { Component } from 'react';
import QuestionContainer from "./questCont.js";

let questions= 
[     
      {
          question: 'What is the average the airspeed velocity of a (European) unladen swallow?',
          answer: '11 meters per second',
          type:"info"
      }, 

      {
          question: 'Quest2 of a (European) unladen swallow?',
          answer: '43 cent per second',
          type:"warning",
      },

      {
          question: 'Quest3 of a (African) unladen swallow?',
          answer: '100 cent per second',
          type:"success"
      },

      {
          question: 'Question to test for error type?',
          answer: '0 cent per second',
          type:"error"
      },

];

class QuestList extends Component {

  constructor(props){
    super(props);
    this.state={
      quest:questions.map(question=>{return(<QuestionContainer question={question.question} answer={question.answer} type={question.type}/>)})
    }
  }

  
  render() {
    
    return (
       <div>
        {this.state.quest}
       </div>
      );
  }
}

export default QuestList;
