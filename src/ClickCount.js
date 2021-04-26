import { useState, useEffect } from 'react';

const ClickCount = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  useEffect(() => {
    document.addEventListener('click', increment);
    return () => document.removeEventListener('click', increment) ;
  });

  const handleReset = () => setCount(-1);

  return (
    <div>
      <p>You clicked {count} times!</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
};

export default ClickCount;
