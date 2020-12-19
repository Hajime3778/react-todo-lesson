import React, { useState } from 'react';

export const TodoListContext = React.createContext({});

const todoListSampleData = [
  {
    title: 'Reactのお勉強',
    description: 'Reactのチュートリアルをやる',
  },
  {
    title: 'Todoアプリを作ってみる',
    description: 'かんたんなTodoアプリを作ってみよう！',
  },
];

export const TodoListProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(todoListSampleData);

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        setTodoList,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
