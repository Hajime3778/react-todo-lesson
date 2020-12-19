import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Todo } from 'src/model/Todo';
import './TodoEdit.css';

interface Props {
  todoList: Todo[];
  updateTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
}

interface ParamTypes {
  id: string;
}

const TodoEdit: React.FC<Props> = ({ todoList, updateTodo, deleteTodo }) => {
  const id = parseInt(useParams<ParamTypes>().id);
  const todo = todoList.filter((todo) => todo.id === id)[0];
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const history = useHistory();

  const titleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const descriptionChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const saveClicked = () => {
    const todo: Todo = {
      id: id,
      title: title,
      description: description,
    };
    updateTodo(todo);
    history.push('/');
  };

  const deleteClicked = () => {
    const todo: Todo = {
      id: id,
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
