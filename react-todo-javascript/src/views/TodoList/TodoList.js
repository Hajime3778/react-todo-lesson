import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from '../../components/TodoItem';
import { useHistory } from 'react-router-dom';

function TodoList({ todoList, addTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  const titleChanged = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChanged = (e) => {
    setDescription(e.target.value);
  };

  const addClick = () => {
    addTodo({ title: title, description: description });
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
      </div>
      <div>
        <a className="todo-add-button" type="submit" onClick={addClick}>
          追加
        </a>
      </div>
      {todoList.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.title}
            onClick={() =>
              history.push(`/edit?title=${todo.title}&description=${todo.description}`)
            }
          />
        );
      })}
    </div>
  );
}

export default TodoList;
