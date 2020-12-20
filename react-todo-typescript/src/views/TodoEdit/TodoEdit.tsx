import React, { useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './TodoEdit.css';
import { TodoListContext } from 'src/store/TodoListContext';
import { Todo } from 'src/model/Todo';

interface ParamTypes {
  id: string;
}

const TodoEdit: React.FC = () => {
  const history = useHistory();
  const { todoList, setTodoList } = useContext(TodoListContext);
  const id = parseInt(useParams<ParamTypes>().id);
  const todo: Todo = todoList.filter((todo) => todo.id === id)[0] || {
    id: id,
    title: '',
    description: '',
  };

  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const titleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const descriptionChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    console.log(description);
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
      <input
        type="text"
        className="todo-title-input"
        value={title}
        onChange={titleChanged}
      />
      <textarea
        className="todo-description-input"
        value={description}
        onChange={descriptionChanged}
      />
      <button onClick={saveClick}>保存</button>
      <button onClick={deleteClick}>削除</button>
    </React.Fragment>
  );
};

export default TodoEdit;
