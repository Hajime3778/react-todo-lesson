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

  const titleChanged = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChanged = (e) => {
    setDescription(e.target.value);
  };

  const addClick = () => {
    if (title === '' && description === '') return;
    const newTodoList = todoList.slice();

    // 現在のID最大値+1を、新規IDとして設定する
    const newId = Math.max(...newTodoList.map((todo) => todo.id)) + 1;
    newTodoList.push({ id: newId, title: title, description: description });
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
      </div>
      <div>
        <a className="todo-add-button" type="submit" onClick={addClick}>
          追加
        </a>
      </div>
      {todoList.map((todo) => {
        return (
          <TodoItem todo={todo} key={todo.id} onClick={() => history.push(`/edit/${todo.id}`)} />
        );
      })}
    </div>
  );
}

export default TodoList;
