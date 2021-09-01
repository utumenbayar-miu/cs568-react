import { Component } from "react";
import Student from "./Student";

export default class App extends Component {
  state = {
    students: [
      { name: "John", age: 22 },
      { name: "Tom", age: 22 },
      { name: "Jerry", age: 21 },
    ],
  };

  incrementAge = () => {
    const students = this.state.students;
    for (let student of students) {
      student.age = student.age + 1;
    }
    this.setState({ students });
  };

  render() {
    return (
      <div>
        <Student
          name={this.state.students[0].name}
          age={this.state.students[0].age}
          incrementAge={this.incrementAge}
        />
        <Student
          name={this.state.students[1].name}
          age={this.state.students[1].age}
          incrementAge={this.incrementAge}
        />
        <Student
          name={this.state.students[2].name}
          age={this.state.students[2].age}
          incrementAge={this.incrementAge}
        />
        <button onClick={this.incrementAge}>Increment age</button>
      </div>
    );
  }
}
