import React, { Component } from "react";

export default class Student extends Component {
  render() {
    return (
      <div>
        <hr />
        <p
          onClick={() => {
            this.props.deleteStudent(this.props.index);
          }}
        >
          Name: {this.props.name}
        </p>
        <p
          onClick={() => {
            this.props.incrementAge(this.props.index);
          }}
        >
          Age: {this.props.age}
        </p>
      </div>
    );
  }
}
