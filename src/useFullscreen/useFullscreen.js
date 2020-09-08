import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { isElementOfType } from 'react-dom/test-utils';

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === 'function') {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === 'function') {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? 'We are Full' : 'We are Small');
  };
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div className="App">
      <div ref={element}>
        <img
          src="https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/storypick/editor/2019082810235260238.jpg"
          width="700px"
        />
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
      <button onClick={exitFull}>Exit Fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
