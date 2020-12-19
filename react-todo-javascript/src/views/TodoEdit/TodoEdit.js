import React, { useState, useContext } from 'react';
import { TodoListContext } from '../../store/TodoListContext';
import './TodoEdit.css';
import { useLocation, useHistory } from 'react-router-dom';

function TodoEdit() {
  const query = new URLSearchParams(useLocation().search);
  const { todoList, setTodoList } = useContext(TodoListContext);
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
    const newTodoList = todoList.slice();
    newTodoList.forEach((todo) => {
      if (todo.title === query.get('title')) {
        todo.title = title;
        todo.description = description;
      }
    });
    setTodoList(newTodoList);
    history.push('/');
  };

  const deleteClick = () => {
    const newTodoList = todoList.filter((todo) => {
      return todo.title !== query.get('title');
    });
    setTodoList(newTodoList);
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
