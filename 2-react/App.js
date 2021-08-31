import React, { Fragment } from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import Greeting from "./Greeting";

function App() {
  return (
    <Fragment>
      <h1>Hello World</h1>
      <ClassComponent />
      <hr />
      <FunctionalComponent />
      <hr />
      <Greeting name="My Name" age="33" />
    </Fragment>
  );
}

export default App;
