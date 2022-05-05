import React, { Component } from "react";
import { useState } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(e) => {
            //typing triggers onChange event, whose target is input form
            this.setState({ userInput: e.target.value }); //value is whatever user types in
          }}
        ></input>
        <button
          className="confirmationButton"
          onClick={this.buttonClicked.bind(this)}
        >CLICK ME</button>
        <span className="resultsBox">Even: {this.state.evenArray}</span>
        <span className="resultsBox">Odd: {this.state.oddArray}</span>
      </div>
    );
  } //end render
  buttonClicked(e) {
    const isEven = (num) => num % 2 === 0;
    const input = this.state.userInput;

    this.state.evenArray = [];
    this.state.oddArray = [];

    for (let index = 0; index < input.length; index++) {
      if (isEven(input.charAt(index))) {
        this.state.evenArray.push(input.charAt(index));
      } else {
        this.state.oddArray.push(input.charAt(index));
      }
    }//end for loop
    this.forceUpdate()//forces component to re-render
  }//end buttonClicked function
}//end class
export default EvenAndOdd;
