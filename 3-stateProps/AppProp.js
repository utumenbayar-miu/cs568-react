import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import AdvancedHello from "./AdvancedHello";
import AdvancedHelloClass from "./AdvancedHelloClass";

export default function App() {
  return (
    <div className="App">
      Hello world <br />
      <ClassComponent />
      <FunctionalComponent />
      <AdvancedHello name="Anyname" age="25">
        <div>
          <h3>I am a header 3</h3>
          <p>I am a child of advanced hello</p>
        </div>
      </AdvancedHello>
      <AdvancedHelloClass name="MyName" age="35 " />
    </div>
  );
}
