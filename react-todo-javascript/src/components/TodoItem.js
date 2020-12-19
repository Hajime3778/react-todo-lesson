import React from 'react';
import './TodoItem.css';

function TodoItem({ title, description }) {
  //const { title, description } = this.props;
  return (
    <div className="todo-item">
      <div className="todo-item-title">{title}</div>
      <div className="todo-item-description">{description}</div>
    </div>
  );
}

export default TodoItem;
