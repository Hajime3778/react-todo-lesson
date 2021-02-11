import React, { useEffect, useState, useContext } from 'react';
import Axios, { AxiosResponse } from 'axios';
import { TodoListContext } from 'src/context/TodoListContext';
import { Todo } from 'src/model/Todo';
import { TodoItem } from 'src/components/TodoItem';
import styles from './TodoList.css';

export const TodoList: React.FC = () => {
  const { todoList, setTodoList } = useContext(TodoListContext);
  const [todo, setTodo] = useState<Todo>({
    title: '',
    description: '',
  });

  useEffect(() => {
    (async () => {
      const response = await Axios.get<Todo[]>('todos');
      setTodoList(response.data);
    })();
  }, [setTodoList]);

  const changedTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTodo = Object.assign({}, todo);
    newTodo.title = e.target.value;
    setTodo(newTodo);
  };

  const changedDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTodo = Object.assign({}, todo);
    newTodo.description = e.target.value;
    setTodo(newTodo);
  };

  const addClick = async () => {
    const response = await Axios.post<Todo, AxiosResponse<string>>(
      'todos',
      todo
    );

    const newTodoList = todoList.slice();
    const newTodo = Object.assign({}, todo);

    newTodo.id = parseInt(response.data);
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  return (
    <>
      <div>
        <input className={styles.todoTitleInput} onChange={changedTitle} />
        <textarea
          className={styles.todoDescriptionInput}
          onChange={changedDescription}
        />
      </div>
      <div>
        <button className={styles.todoAddButton} onClick={addClick}>
          Click Me!!!
        </button>
      </div>
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};
