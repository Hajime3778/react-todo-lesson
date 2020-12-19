import React, { useState, useContext } from 'react';
import { TodoListContext } from '../../store/TodoListContext';
import './TodoEdit.css';
import { useHistory, useParams } from 'react-router-dom';

function TodoEdit() {
  const { todoList, setTodoList } = useContext(TodoListContext);
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
    const newTodoList = todoList.slice();
    newTodoList.forEach((todo) => {
      if (todo.id === id) {
        todo.title = title;
        todo.description = description;
      }
    });
    setTodoList(newTodoList);
    history.push('/');
  };

  const deleteClick = () => {
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== id;
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
