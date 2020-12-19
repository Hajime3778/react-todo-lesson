import React, { useState } from 'react';
import './TodoEdit.css';
import { useHistory, useParams } from 'react-router-dom';

function TodoEdit({ todoList, updateTodo, deleteTodo }) {
  const id = parseInt(useParams().id);
  const todo = todoList.filter((todo) => todo.id === id)[0];
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const history = useHistory();

  const titleChanged = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChanged = (e) => {
    setDescription(e.target.value);
  };

  const saveClick = () => {
    updateTodo({ id: id, title: title, description: description });
    history.push('/');
  };

  const deleteClick = () => {
    deleteTodo({ id: id, title: title, description: description });
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
