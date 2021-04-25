import React, { useState } from 'react';

const Greetings = (props) => {

  // const handleClick = () => {
  //   console.log(`Hello, ${props.name}!`, props);
  // }

  // const handleClickAgain = (name, e) => {
  //   console.log(`Hello, ${name}!`, e.target);
  // }

  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hi, ${name}`)
  };

  const handleChange = ({ target }) => {
    setName((prev) => target.value);
  }

  return (
    <div className="home">
      <h1>Whats' your name?</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Say hi</button>
      </form>

      <h1>{greeting}</h1>

{/*      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("Miebi", e)}>Click me</button>*/}
    </div>
  );
}

export default Greetings;
