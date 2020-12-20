import React, { useState, createContext, ReactNode } from 'react';
import { Todo } from 'src/model/Todo';

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

interface TodoListContextProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoListContext = createContext<TodoListContextProps>({
  todoList: [],
  setTodoList: () => console.warn('no function'),
});

export const TodoListProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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
