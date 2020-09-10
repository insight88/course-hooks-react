import React, { useState } from 'react';

function App() {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(20);

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <button
        onClick={() => {
          setCount1((c) => c + 1);
          setCount2((c) => c + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount1((c) => c - 1);
          setCount2((c) => c - 1);
        }}
      >
        -
      </button>
      <div>count1 : {count1}</div>
      <div>count2 : {count2}</div>
    </div>
  );
}

export default App;
