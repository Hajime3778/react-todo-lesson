import React, { useState } from 'react';

export const TodoListContext = React.createContext({});

const todoListSampleData = [
  {
    id: 0,
    title: 'Reactのお勉強',
    description: 'Reactのチュートリアルをやる',
  },
  {
    id: 1,
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
