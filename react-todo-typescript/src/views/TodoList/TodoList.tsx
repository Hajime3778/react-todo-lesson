import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './TodoList.css';
import { Todo } from 'src/model/Todo';
import TodoItem from 'src/components/TodoItem';

interface Props {
  todoListProps: Todo[];
  addTodo: (todo: Todo) => void;
}

const TodoList: React.FC<Props> = ({ todoListProps, addTodo }) => {
  const todoList = todoListProps;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  const titleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const descriptionChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const addClick = () => {
    const todo: Todo = {
      title: title,
      description: description,
    };
    addTodo(todo);
  };

  return (
    <div className="todo-list">
      <div>
        <input
          className="todo-title-input"
          id="title"
          placeholder="title"
          value={title}
          onChange={titleChanged}
        />
        <textarea
          className="todo-description-input"
          id="description"
          placeholder="description"
          value={description}
          onChange={descriptionChanged}
        />
        <div>
          <a className="todo-add-button" type="submit" onClick={addClick}>
            追加
          </a>
        </div>
        {todoList.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.title}
              onClick={() => {
                history.push(
                  `/edit?title=${todo.title}&description=${todo.description}`
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
