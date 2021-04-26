import { useState, useEffect } from 'react';

const ClickCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // increment();
    document.addEventListener('click', increment);
    return () => document.removeEventListener('click', increment) ;
  });

  const [color, setColor] = useState('red');
  const handleColor = () => setColor((prev) => {
    return prev === 'pink' ? 'blue' : 'pink'
  })

  const increment = () => setCount(prev => prev + 1);
  const handleReset = () => setCount(-1);

  return (
    <div>
      <p>You clicked {count} times!</p>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleColor} style={{background: color}}>Change color</button>
      <p>{color}</p>
    </div>
  )
};

export default ClickCount;
