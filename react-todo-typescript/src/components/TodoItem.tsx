import React from 'react';
import { Todo } from 'src/model/Todo';
import './TodoItem.css';

type Props = {
  todo: Todo;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <div className="todo-item" key={todo.title}>
      <div className="todo-item-title">{todo.title}</div>
      <div className="todo-item-description">{todo.description}</div>
    </div>
  );
};

export default TodoItem;
