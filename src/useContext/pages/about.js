import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

export function About() {
  const { user } = useContext(UserContext);
  // * useContext(obj) : obj는 UserContext.js에서 import한 React.createContext()
  // * context를 사용하면 층층히 provider에서 consumer로 props를 넘겨 주지 않고
  // * 컴포넌트 트리 전체에 데이터를 제공할 수 있다 (전역적인 데이터 공유 방법)

  return (
    <div>
      <h2>About</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
