import React, { useState } from 'react';
import './TodoList.css';
import { Todo } from './model/Todo';
import TodoItem from 'src/components/TodoItem';

const dataList: Todo[] = [
  { title: 'Reactのお勉強', description: 'Reactのチュートリアルをやる' },
  { title: 'Todoアプリを作ってみる', description: 'Typescriptでやってみよう' },
];

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState(dataList);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const titleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const descriptionChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const addClick = () => {
    const todo: Todo = {
      title: title,
      description: description,
    };
    setTitle('');
    setDescription('');

    const newTodoList = todoList.slice();
    newTodoList.push(todo);
    setTodoList(newTodoList);
  };

  return (
    <div className="todo-list">
      <div>
        <input
          className="todo-title-input"
          id="title"
          placeholder="title"
          value={title}
          onChange={titleChanged}
        />
        <textarea
          className="todo-description-input"
          id="description"
          placeholder="description"
          value={description}
          onChange={descriptionChanged}
        />
        <div>
          <a className="todo-add-button" type="submit" onClick={addClick}>
            追加
          </a>
        </div>
        {todoList.map((todo) => {
          return <TodoItem todo={todo} key={todo.title} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
