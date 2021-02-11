import React from 'react';
import styles from './TodoItem.css';
import { Todo } from '../model/Todo';

type Props = {
  todo: Todo;
  onClick?: () => void;
};

export const TodoItem: React.FC<Props> = ({ todo, onClick }) => {
  return (
    <div className={styles.todoItem} onClick={onClick}>
      <div className={styles.todoItemTitle}>{todo.title}</div>
      <div className={styles.todoItemDescription}>{todo.description}</div>
    </div>
  );
};
