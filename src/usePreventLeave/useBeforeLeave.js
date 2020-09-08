import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore === 'function') {
      document.addEventListener('mouseleave', handle);
      return () => document.removeEventListener('mouseleave', handle);
    } else {
      return;
    }
  }, []);
  // * useBeforeLeave는 useEffect를 활용
};

const App = () => {
  const begForLife = () => console.log('Plz dont leave');
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
