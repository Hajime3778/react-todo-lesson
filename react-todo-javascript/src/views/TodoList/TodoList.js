import React, { useState, useContext } from 'react';
import { TodoListContext } from '../../store/TodoListContext';
import './TodoList.css';
import TodoItem from '../../components/TodoItem';
import { useHistory } from 'react-router-dom';

function TodoList() {
  const { todoList, setTodoList } = useContext(TodoListContext);
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
    const newTodoList = todoList.slice();
    newTodoList.push({ title: title, description: description });
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
