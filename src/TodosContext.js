import React, { useState } from 'react';

export const TodosContext = React.createContext({});

const todosSampleData = [
  {
    title: 'Reactのお勉強',
    description: 'Reactのチュートリアルをやる',
  },
  {
    title: 'Todoアプリを作ってみる',
    description: 'かんたんなTodoアプリを作ってみよう！',
  },
];

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(todosSampleData);

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
