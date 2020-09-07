import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
};
// * [userInput().value, useInput().onChange]를 return
// * useInput을 통해 react component가 아닌 다른 function에서 event를 handle할 수 있다

const App = () => {
  const maxLen = (value) => value.length < 10;
  const name = useInput('Mr.', maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
