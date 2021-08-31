// This and arrow function example
const obj = {
  name: "Uno",
  sayHi: function () {
    setTimeout(() => {
      console.log(this);
    }, 200);
  },
};

obj.sayHi();

const object = {
  name: "Uno",
  sayHi: function () {
    setTimeout(() => {
      console.log(`Hi, I am ${this.name}`);
    }, 100);
  },
};

object.sayHi();

const student = {
  name: "Uno",
  sayHi: function () {
    const inner = function () {
      console.log("Hi " + this.name);
    }.bind(this);
    inner();
  },
  sayHello: function () {
    const inner = () => {
      console.log("Hello " + this.name);
    };
    inner();
  },
};
student.sayHi();
student.sayHello();
