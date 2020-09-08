import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const contents = [
  {
    tab: 'Section 1',
    content: 'Im the content of the Section 1',
  },
  {
    tab: 'Section 2',
    content: 'Im the content of the Section 2',
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  // if (!allTabs || Array.isArray(allTabs)) {
  //   return;
  // }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
// * useTabs는 useState를 이용한 새로운 hook

const App = () => {
  const { currentItem, changeItem } = useTabs(0, contents);
  return (
    <div className="App">
      {contents.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
