import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './TodoList.css';
import { Todo } from '../../model/Todo';
import TodoItem from 'src/components/TodoItem';

const dataList: Todo[] = [
  {
    id: 0,
    title: 'Reactのお勉強',
    description: 'Reactのチュートリアルをやる',
  },
  {
    id: 1,
    title: 'Todoアプリを作ってみる',
    description: 'Typescriptでやってみよう',
  },
];

const TodoList: React.FC = () => {
  const history = useHistory();
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
    if (title === '' || description === '') return;
    const newTodoList = todoList.slice();

    // 現在のID最大値+1を、新規IDとして設定する
    const newId = Math.max(...newTodoList.map((todo) => todo.id)) + 1;
    const todo: Todo = {
      id: newId,
      title: title,
      description: description,
    };
    newTodoList.push(todo);

    setTitle('');
    setDescription('');
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
          return (
            <TodoItem
              key={todo.title}
              todo={todo}
              onClick={() => {
                history.push(`/edit/${todo.id}`);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
