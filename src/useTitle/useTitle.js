import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
// * useTitle은 useState를 이용한 새로운 hook
const App = () => {
  const titleUpdater = useTitle('Loading....');
  setTimeout(() => titleUpdater('Home'), 3000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
