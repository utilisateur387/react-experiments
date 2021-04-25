import React, { useState } from 'react';

  const GroceryList = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      setList((prev) => [...prev, item]);
      setItem('');
    };

    const handleChange = ({ target }) => {
      setItem(target.value);
    };

    const isDisabled = item === '';

    const handleDelete = (index) => {
      setList((prev) => {
        return prev.filter((item, n) => n !== index )
      })
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={item || ''} onChange={handleChange}/>
          <button type='submit' disabled={isDisabled}>Add</button>
        </form>

        <h1>This is my grocery list ({list.length}):</h1>
        <ul>
          {list.map((item, index) => {
              return (
                <li key={index}>
                  <button onClick={() => handleDelete(index)}>X</button>
                  {item}
                </li>
              )
            })}
        </ul>
      </div>
    )
  }

export default GroceryList;
