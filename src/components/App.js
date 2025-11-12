import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      relationship: "",
    };
    this.relationshipArr = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings" ] ;
  }

  reset = () => {
    this.setState({
      name1: "",
      name2: "",
      relationship: "",
    });
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  calculateRelationship = () => {
    let name1 = this.state.name1.toLowerCase().trim();
    let name2 = this.state.name2.toLowerCase().trim();
    let count = 0;

    if(!name1 || !name2){
        this.setState({
            relationship: "Please Enter valid input",
        });
        return
    }
    for(let char of name2){
        if(name1.includes(char)) {
            count++;
            name1 = name1.replace(char, "");
        };
    }

    const sum = name1.length + name2.length - count;
    this.setState({
        relationship: this.relationshipArr[sum%6],
    });
  };

  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <input
          data-testid="input1"
          name="name1"
          placeholder="Enter first name"
          onChange={this.onChange}
          value={this.state.name1}
        />
        <input
          data-testid="input2"
          name="name2"
          placeholder="Enter second name"
          onChange={this.onChange}
          value={this.state.name2}
        />
        <button
          data-testid="calculate_relationship"
          name="calculate_relationship"
          type="button"
          onClick={this.calculateRelationship}
        >
          Calculate Relationship Future
        </button>
        <button data-testid="clear" name="clear" onClick={this.reset}>
          Clear
        </button>
        <h3 data-testid="answer">{this.state.relationship}</h3>
      </div>
    );
  }
}

export default App;
