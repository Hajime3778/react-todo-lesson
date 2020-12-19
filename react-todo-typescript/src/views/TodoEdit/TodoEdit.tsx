import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Todo } from 'src/model/Todo';
import './TodoEdit.css';

interface Props {
  updateTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
}

const TodoEdit: React.FC<Props> = ({ updateTodo, deleteTodo }) => {
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const [title, setTitle] = useState(query.get('title') as string);
  const [description, setDescription] = useState(
    query.get('description') as string
  );

  const titleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const descriptionChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const saveClicked = () => {
    const todo: Todo = {
      title: title,
      description: description,
    };
    updateTodo(todo);
    history.push('/');
  };

  const deleteClicked = () => {
    const todo: Todo = {
      title: title,
      description: description,
    };
    deleteTodo(todo);
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
      <button onClick={saveClicked}>保存</button>
      <button onClick={deleteClicked}>削除</button>
    </React.Fragment>
  );
};

export default TodoEdit;
