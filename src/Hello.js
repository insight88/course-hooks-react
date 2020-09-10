import React from 'react';
// import { useCountRenders } from './useCountRenders';

export const Hello = React.memo(({ increment }) => {
  // * React.memo({prop}) : prop이 바뀔 때만 re-render한다
  // useCountRenders();
  return <button onClick={() => increment(5)}>hello</button>;
});
