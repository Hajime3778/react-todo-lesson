import React, { useState, useContext } from 'react';
import { TodosContext } from './TodosContext';
import './TodoEdit.css';
import { useLocation, useHistory } from 'react-router-dom';

function TodoEdit() {
  const query = new URLSearchParams(useLocation().search);
  const { todos, setTodos } = useContext(TodosContext);
  const [title, setTitle] = useState(query.get('title'));
  const [description, setDescription] = useState(query.get('description'));
  const history = useHistory();

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const saveClick = () => {
    const newTodos = todos.slice();
    newTodos.forEach((todo) => {
      if (todo.title === query.get('title')) {
        todo.title = title;
        todo.description = description;
      }
    });
    setTodos(newTodos);
    history.push('/');
  };

  // const deleteClick = () => {
  //   const newTodos = todos.slice();
  //   newTodos.forEach((todo) => {
  //     if (todo.title === title) {
  //       todo.description = description;
  //     }
  //   });
  //   setTodos(newTodos);
  //   history.push('/');
  // };

  return (
    <div>
      <h1>編集画面</h1>
      <input type="text" className="todo-title-input" value={title} onChange={changeTitle} />
      <textarea
        type="textarea"
        className="todo-description-input"
        value={description}
        onChange={changeDescription}
      />
      <button onClick={saveClick}>保存</button>
      <button>削除</button>
    </div>
  );
}

export default TodoEdit;
