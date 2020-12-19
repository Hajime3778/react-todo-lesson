import React from 'react';
import { Todo } from 'src/model/Todo';
import './TodoItem.css';

interface Props {
  todo: Todo;
  onClick: () => void;
}

const TodoItem: React.FC<Props> = ({ todo, onClick }) => {
  return (
    <div className="todo-item" onClick={onClick} key={todo.title}>
      <div className="todo-item-title">{todo.title}</div>
      <div className="todo-item-description">{todo.description}</div>
    </div>
  );
};

export default TodoItem;
