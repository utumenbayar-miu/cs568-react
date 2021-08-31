// app.js
// import examples
import students from "./student.js";
import anyname from "./student.js";
import myDefault, { minutesInHour, sayHi } from "./helper.js";

console.log(JSON.stringify(students));
console.log(JSON.stringify(anyname));
console.log(JSON.stringify(myDefault));
console.log(minutesInHour);

// destructuring and spread examples
const student1 = {
  fname: "Unubold",
};
student1.fname = "Something";

const name = "some name";
const age = 12;
const className = "cs568";

console.log(sayHi({ name: name, age: age, className }));

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr2[0] = 4;
console.log(arr1);

// This won't work because class are not like regular functions that are hoisted
// const MyClassInstanceI = new MyClass();
// console.log(MyClassInstanceI.addX(2));

class MyClass {
  x = 2;

  addX = (y) => {
    return this.x + y;
  };
}

const MyClassInstanceI = new MyClass();
console.log(MyClassInstanceI.addX(2));
