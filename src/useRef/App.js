import React, { useEffect, useState, useRef, useReducer } from 'react';
import { Hello } from './Hello';
import { useForm } from './useState/useForm';
import { useFetch } from './useEffect/useFetch';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });
  const inputRef = useRef();
  const hello = useRef(() => console.log('hello'));
  // * hello useRef가 호출될 때마다 input object(function)도 같이 call됨

  const [showHello, setShowHello] = useState(true);

  return (
    <div>
      <>
        <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />}
        <input
          ref={inputRef}
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            inputRef.current.focus();
            hello.current();
          }}
        >
          focus
        </button>
      </>
    </div>
  );
};

export default App;
