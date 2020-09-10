import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'add-todo':
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case 'toggle-todo':
      return {
        todos: state.todos.map((todo, idx) =>
          idx === action.idx ? { ...todo, completed: !todo.completed } : todo
        ),
        todoCount: state.todoCount - 1,
      };
    default:
      return state;
  }
}
// * reducer 함수는 state를 mutate하지 않는 pure function

const App = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  // * const [state, dispatch] = useReducer(reducer, initial state)
  // * dispatch(obj) : state를 변화시키는 function
  const [text, setText] = useState();
  // * useState()보다 복잡한 case를 다룰 때 useReducer()가 유용하다
  // * case 분기가 가능하고, case마다 여러 action(todos, todoCount)을 동시에 수행 가능하다
  // * SPA에선 useReducer가 간편하지만, components끼리 많은 정보를 주고 받을 때는 Redux가 더 편함

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'add-todo', text });
          setText('');
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      <div>number of todos: {todoCount}</div>
      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: 'toggle-todo', idx })}
          style={{
            textDecoration: t.completed ? 'line-through' : '',
          }}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
};

export default App;
