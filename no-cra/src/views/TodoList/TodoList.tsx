import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Todo } from '../../model/Todo';
import { TodoItem } from '../../components/TodoItem';
import styles from './TodoList.css';

export const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodoList = async () => {
      const response = await Axios.get<Todo[]>('todos');
      setTodoList(response.data);
    };
    getTodoList();
  }, [setTodoList]);

  return (
    <>
      <div>
        <input className={styles.todoTitleInput} />
        <textarea className={styles.todoDescriptionInput} />
      </div>
      <div>
        <button className={styles.todoAddButton}>Click Me!!!</button>
      </div>
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};
