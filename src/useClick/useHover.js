import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const useClick = (onClick) => {
  const element = useRef();
  if (typeof onClick !== 'function') {
    return;
  }
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('mouseover', onClick);
    }
    // * dependency가 [] 비어있으므로 componentDidMount가 됐을 때 한 번만 실행됨
    // * dependency가 없을 경우 componentDidUpdate가 되어 모든 이벤트 발생시 실행됨
    return () => {
      if (element.current) {
        element.current.removeEventListener('mouseover', onClick);
      }
    };
    // * componentWillUnmount가 됐을 때 실행됨
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log('say Hello');
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      <input placeholder="la" />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
