import React from 'react';
import './TodoItem.css';

function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <div className="todo-item-title">{todo.title}</div>
      <div className="todo-item-description">{todo.description}</div>
    </div>
  );
}

export default TodoItem;
