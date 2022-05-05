import React, { Component } from "react";
import { useState } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        {
          petName: "Stubbs",
          hasWhiskers: true,
          isFriendly: "sometimes",
          species: "cat",
        },

        {
          petName: "Jerry",
          hasWhiskers: false,
          isFriendly: "n/a",
          species: "goldfish",
        },

        {
          petName: "Spot",
          hasWhiskers: true,
          isFriendly: "always",
          species: "dog",
        },
      ],
      userInput: "",
      filteredArray: [],
    };
  } //end constructor

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Unfiltered Array:{" "}
          {this.state.unFilteredArray.map((item) => {
            <p key={item.petName}>
              Pet Name:{item.petName}, Whiskers: {item.hasWhiskers},
              Friendliness:
              {item.isFriendly}, Species: {item.species}
            </p>;
          })}
        </span>
        <input
          className="inputLine"
          onChange={(e) => {
            this.setState({ userInput: e.target.value });
          }} //end onChange
        ></input>
        <button
          className="confirmationButton"
          onClick={this.buttonClicked.bind(this)}
        ></button>
        <span className="resultsBox filterObjectRB">
          Filtered Array:{" "}
          {this.state.filteredArray.map((item) => {
            <p key={item.petName}>
              Pet Name:{item.petName}, Whiskers: {item.hasWhiskers},
              Friendliness:
              {item.isFriendly}, Species: {item.species}
            </p>;
          })}
        </span>
      </div>
    );
  } //end render function
  buttonClicked(e) {

  } //end buttonClicked
} //end class
export default FilterObject;
