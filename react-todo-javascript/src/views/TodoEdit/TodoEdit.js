import React, { useState } from 'react';
import './TodoEdit.css';
import { useLocation, useHistory } from 'react-router-dom';

function TodoEdit({ updateTodo, deleteTodo }) {
  const query = new URLSearchParams(useLocation().search);
  const [title, setTitle] = useState(query.get('title'));
  const [description, setDescription] = useState(query.get('description'));
  const history = useHistory();

  const titleChanged = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChanged = (e) => {
    setDescription(e.target.value);
  };

  const saveClick = () => {
    updateTodo({ title: title, description: description });
    history.push('/');
  };

  const deleteClick = () => {
    deleteTodo({ title: title, description: description });
    history.push('/');
  };

  return (
    <React.Fragment>
      <h1>編集画面</h1>
      <input type="text" className="todo-title-input" value={title} onChange={titleChanged} />
      <textarea
        type="textarea"
        className="todo-description-input"
        value={description}
        onChange={descriptionChanged}
      />
      <button onClick={saveClick}>保存</button>
      <button onClick={deleteClick}>削除</button>
    </React.Fragment>
  );
}

export default TodoEdit;
