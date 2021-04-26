import Navbar from './Navbar';
import Greetings from './Greetings';
import Tasks from './Tasks';
import React, { useState } from 'react';
import GroceryList from './GroceryList';
import Filter from './Filter';
import PageTitle from './PageTitle';
import ClickCount from './ClickCount';

function App() {

  const [color, setColor] = useState('pink');
  const [count, setCount] = useState(0);
  const divStyle = { backgroundColor: color};
  const colors = ['aquamarine', 'blue', 'pink', 'orange'];

  const handleOnClick = (e, arg1) => {
    console.log(e);
    console.log(arg1);
  };

  const handleOnClickCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="App" style={divStyle}>
      <Navbar />
      <div className="content">
        <h1>Counter</h1>
        <button onClick={handleOnClickCount}>{count}</button>
        <hr />

        <h1>Color Picker</h1>
        {colors.map((color) => <button onClick={() => setColor(color)}>{color}</button> )}
        <hr/>

        <h1>Log events and arguments</h1>
        <button onClick={(e) => handleOnClick(e, "I'm an argument!")}>Log event and arguments</button>
        <hr/>

        <Tasks/>
        <hr/>

        <Greetings/>
        {/*<Greetings name="Yoshi" age="4" />*/}
        <hr/>

        <GroceryList />
        <hr/>

        <Filter />
        <hr/>

        <PageTitle />
        <hr/>

        <ClickCount />
      </div>
    </div>
  );
}

export default App;
