import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    let validation = this.validate(this.state.value)
    this.setState({
      value: event.target.value
    })
    return validation
  }

  validate(value){
    String.prototype.lines = function() { return this.split(/\r*\n/); }
    String.prototype.lineCount = function() { return this.lines().length; }
    console.log(value.lineCount())
    // if (value.lineCount >= 1){
    //   lineOne = value.lines()[0].split(" ")
    // } else if (value.lineCount >= 2){
    //   lineOne = value.lines()[0].split(" ")
    //   lineTwo = value.lines()[1].split(" ")
      if (value.lineCount() >= 3){
        console.log("YES")
      let lineOne = value.lines()[0].split(" ")
      let lineTwo = value.lines()[1].split(" ")
      let lineThree = value.lines()[2].split(" ")
      if (value.lineCount() === 3 && lineOne.length === 5 && lineTwo.length === 3 && lineThree.length === 5){
        return true
        // document.getElementById("poem-validation-error").innerHTML = ""
      } else {
        return false
        // document.getElementById("poem-validation-error").innerHTML = "This poem is not written in the right structure!"
      }
    }
  }

    // } else if (value. lineCount >= 2){
    //     lineTwo = value.lines()[1].split(" ")
    // } else if (value.lineCount >= 3){
    //     lineThree = value.lines()[2].split(" ")
    // }
    // if (value.lineCount() === 3 && this.lineOne.length === 5 && this.lineTwo.length === 3 && this.lineThree.length === 5){
    //   document.getElementById("poem-validation-error").innerHTML = ""
    // } else {
    //   document.getElementById("poem-validation-error").innerHTML = "This poem is not written in the right structure!"
    // }
  // }


  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        {this.handleChange ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}
