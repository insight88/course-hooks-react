import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const useClick = (onClick) => {
  const element = useRef();
  // * useRef는 tag 중 ref property를 가지는 엘리먼트를 useRef.current에 저장
  // * getElementByID를 하는 것과 비슷한 효과
  if (typeof onClick !== 'function') {
    return;
  }
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    // * dependency가 [] 비어있으므로 componentDidMount가 됐을 때 한 번만 실행됨
    // * dependency가 없을 경우 componentDidUpdate가 되어 모든 이벤트 발생시 실행됨
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
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
