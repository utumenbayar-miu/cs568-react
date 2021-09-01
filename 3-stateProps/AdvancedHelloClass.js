import { Component } from "react";

class AdvancedHelloClass extends Component {
  render() {
    return (
      <p>
        Advanced hello from class {this.props.name}, age {this.props.age}
      </p>
    );
  }
}

export default AdvancedHelloClass;
