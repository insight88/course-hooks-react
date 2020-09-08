import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = '';
    // * chrome에서는 위의 두 줄을 써줘야 함
    console.log('prevent start');
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener);
  return { enablePrevent, disablePrevent };
};
// * usePreventLeave는 react hook을 사용하지 않는 새로운 hook

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
