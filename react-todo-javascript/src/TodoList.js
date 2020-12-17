import React, { useState, useContext } from 'react';
import { TodosContext } from './TodosContext';
import './TodoList.css';
import TodoItem from './TodoItem';
import { useHistory } from 'react-router-dom';

function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const addClick = () => {
    if (title === '' && description === '') return;
    const newTodos = todos.slice();
    newTodos.push({ title: title, description: description });
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <div>
        <input
          className="todo-title-input"
          id="title"
          placeholder="title"
          value={title}
          onChange={changeTitle}
        />
        <textarea
          className="todo-description-input"
          id="description"
          placeholder="description"
          value={description}
          onChange={changeDescription}
        />
      </div>
      <div>
        <a className="todo-add-button" type="submit" onClick={addClick}>
          追加
        </a>
      </div>
      {todos.map((todo) => {
        return (
          <div
            style={{ cursor: 'pointer' }}
            onClick={() =>
              history.push(`/edit?title=${todo.title}&description=${todo.description}`)
            }
            key={todo.title}
          >
            <TodoItem title={todo.title} description={todo.description} key={todo.title} />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
