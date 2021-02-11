import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './TodoEdit.css';

export const TodoEdit: React.FC = () => {
  const id = useParams<{ id: string }>().id;
  return (
    <>
      <h1>Todo Edit {id}</h1>
      <input className={styles.todoTitleInput} />
      <textarea className={styles.todoDescriptionInput} />
      <button>save</button>
      <button>delete</button>
    </>
  );
};
