import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const sayHello = () => console.log('Hello');
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number, aNumber]);
  // * useEffect()는 componentDidMount + componentWillUnmount + componentDidUpdate
  // * 첫 번째 인자는 effect callback 함수
  // * 두 번째 인자는 effect callback을 유도하는 dependency list (지켜보는 변수)
  // * 두 번째 인자가 없다면 모든 update를 watch하다가 effect callback을 실행
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
