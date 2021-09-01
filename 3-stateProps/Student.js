import React, { Component } from "react";

export default class Student extends Component {
  render() {
    return (
      <div>
        <hr />
        <p>Name: {this.props.name}</p>
        <p onClick={this.props.incrementAge}>Age: {this.props.age}</p>
      </div>
    );
  }
}
