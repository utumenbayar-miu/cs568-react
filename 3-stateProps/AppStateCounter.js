import { Component } from "react";
import AdvancedHello from "./AdvancedHello";

class App extends Component {
  state = {
    counter: 0,
    name: "next student",
    age: 13,
  };

  incrementCounter = () => {
    console.log(JSON.stringify(this.state));
    const newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter });
  };

  render() {
    return (
      <div>
        <h3>I am header!</h3>
        <button onClick={this.incrementCounter}>
          {this.props.appProp} Counter is: {this.state.counter}
        </button>
        <hr />
        <AdvancedHello name={this.state.name} age={this.state.age} />
      </div>
    );
  }
}

export default App;
