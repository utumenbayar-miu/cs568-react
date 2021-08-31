export default function Greeting({ name, age }) {
  if (name) {
    return (
      <p>
        Hello {name}, my age is {age}!
      </p>
    );
  } else {
    return <p>Hello anonyms!</p>;
  }
}
