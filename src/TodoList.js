import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import { useHistory } from 'react-router-dom';

const todosSampleData = [
  {
    title: '材料を買う',
    description: 'お米、のり、鮭フレーク',
  },
  {
    title: 'お米を炊く',
    description: 'お米を炊飯器で一時間炊く',
  },
  {
    title: '握る',
    description: '鮭フレークを入れて、三角に握る',
  },
  {
    title: 'のりを巻く',
    description: 'のりをくっつける',
  },
  {
    title: 'たべる',
    description: 'おいしい！',
  },
];

function TodoList() {
  const [todos, setTodos] = useState(todosSampleData);
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
      <form className="todo-form">
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
      </form>
      {todos.map((todo) => {
        return (
          <div onClick={() => history.push(`/${todo.title}`)} key={todo.title}>
            <TodoItem title={todo.title} description={todo.description} key={todo.title} />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
