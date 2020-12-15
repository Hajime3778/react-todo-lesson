import React, { useState } from 'react';
import './TodoEdit.css';
import { useLocation } from 'react-router-dom';

function TodoEdit() {
  const query = new URLSearchParams(useLocation().search);
  const [title, setTitle] = useState(query.get('title'));
  const [description, setDescription] = useState(query.get('description'));

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

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
      <button>保存</button>
      <button>削除</button>
    </div>
  );
}

export default TodoEdit;
