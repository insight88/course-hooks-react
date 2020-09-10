import React, { useState } from 'react';

function App() {
  const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });
  // * App에서 호출할 때 {count}, {setCount}형태로 호출
  // * setCount는 콜백 함수

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      {/* // * react에서 style prop은 camelCase object로 선언해줘야 한다 */}
      <button
        onClick={
          () =>
            setCount((currentCount) => ({
              ...currentCount,
              count1: currentCount.count1 + 1,
            }))
          // * currentCount = { count1, count2 }
          // * count1의 값만을 바꾸고, 나머지 prop들은 dot dot dot으로 현상 유지 가능
          // * ...currentCount를 먼저 선언해줘야 한다 (뒤에 선언하면 count1 값이 현재 값으로 그대로 적용된다)
          // * setCount()는 object input -> object output
        }
      >
        +
      </button>
      <button
        onClick={() =>
          setCount((currentCount) => ({
            count1: currentCount.count1 - 1,
            count2: currentCount.count2,
          }))
        }
      >
        -
      </button>
      <div>count1 : {count1}</div>
      <button
        onClick={() =>
          setCount((currentCount) => ({
            ...currentCount,
            count2: currentCount.count2 + 1,
          }))
        }
      >
        +
      </button>
      <button
        onClick={() =>
          setCount((currentCount) => ({
            ...currentCount,
            count2: currentCount.count2 - 1,
          }))
        }
      >
        -
      </button>
      <div>count2 : {count2}</div>
    </div>
  );
}

export default App;
