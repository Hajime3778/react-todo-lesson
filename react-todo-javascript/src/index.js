import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoListProvider } from './store/TodoListContext';

ReactDOM.render(
  <React.StrictMode>
    <TodoListProvider>
      <App />
    </TodoListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
