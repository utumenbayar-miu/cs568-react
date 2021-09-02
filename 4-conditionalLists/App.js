import { Component } from "react";
import Student from "./Student";

export default class App extends Component {
  state = {
    students: [
      { name: "John", age: 22 },
      { name: "Tom", age: 23 },
      { name: "Jerry", age: 21 },
    ],
    showStudents: true,
  };

  showHideStudents = () => {
    this.setState({ showStudents: !this.state.showStudents });
  };

  incrementStudentAge = (index) => {
    const students = this.state.students;
    students[index].age += 1;
    this.setState({ students });
  };

  incrementAllAge = () => {
    const students = this.state.students;
    for (let student of students) student.age += 1;
    this.setState({ students });
  };

  deleteStudent = (index) => {
    const students = [...this.state.students];
    students.splice(index, 1);
    this.setState({ students });
  };

  render() {
    let studentsJsx = null;

    if (this.state.showStudents) {
      studentsJsx = this.state.students.map((student, index) => {
        return (
          <Student
            key={index}
            name={student.name}
            age={student.age}
            index={index}
            incrementAge={this.incrementStudentAge}
            deleteStudent={this.deleteStudent}
          />
        );
      });
    }

    return (
      <div>
        <div>{studentsJsx}</div>
        <button onClick={this.incrementAllAge}>Increment all age</button>
        <br />
        <button onClick={this.showHideStudents}>Show/Hide students</button>
      </div>
    );
  }
}
