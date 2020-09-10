import React, { useState, useCallback } from 'react';
import { Hello } from './Hello';
import { Square } from './Square';

const App = () => {
  const [count, setCount] = useState(0);
  const favouriteNums = [7, 21, 37];

  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );
  // * useCallback(callbackFn, [deps])
  // * shouldComponentUpdate와 비슷하게, deps가 바뀔 때만 callback을 부름

  const [rect, inputRef2] = useMeasure([]);

  return (
    <div>
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favouriteNums.map((n) => {
        return <Square increment={increment} n={n} key={n} />;
      })}
    </div>
  );
};

export default App;
