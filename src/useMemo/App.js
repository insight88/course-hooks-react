import React, { useState, useMemo } from 'react';
import { useFetch } from './useFetch';

function computeLongestWord(arr) {
  if (!arr) {
    return [];
  }

  console.log('computing longest word');

  let longestWord = '';

  JSON.parse(arr).forEach((sentence) =>
    sentence.split(' ').forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })
  );
  return longestWord;
}

const App = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    'https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json'
  );

  // ? const longestWord = computeLongestWord(data)
  // * fetch된 data가 변함이 없어도 count가 변하면 computeLongestWord가 호출되어 re-render된다
  const longestWord = useMemo(() => computeLongestWord(data), [data]);
  // * fetch된 data에 변함이 없으면 computeLongestWord가 반복적으로 호출되지 않는다

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  );
};

export default App;
