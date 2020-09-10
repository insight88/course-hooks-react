import React, { useState, useEffect } from 'react';
import { useFetch } from './useEffect/useFetch';

const App = () => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')));
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>{data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  );
};

export default App;
