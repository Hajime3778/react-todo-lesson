import React, { useState } from 'react';
import TodoList from './views/TodoList/TodoList';
import TodoEdit from './views/TodoEdit/TodoEdit';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const dataList = [
  { title: 'Reactのお勉強', description: 'Reactのチュートリアルをやる' },
  { title: 'Todoアプリを作ってみる', description: 'Typescriptでやってみよう' },
];

function App() {
  const [todoList, setTodoList] = useState(dataList);

  const addTodo = (todo) => {
    const newTodoList = todoList.slice();
    newTodoList.push(todo);
    setTodoList(newTodoList);
  };

  const updateTodo = (todo) => {
    const newTodoList = todoList.slice();
    newTodoList.forEach((targetTodo) => {
      if (targetTodo.title === todo.title) {
        targetTodo.title = todo.title;
        targetTodo.description = todo.description;
      }
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (todo) => {
    const newTodoList = todoList.filter((targetTodo) => {
      return targetTodo.title !== todo.title;
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" render={() => <TodoList todoList={todoList} addTodo={addTodo} />} />
          <Route
            path="/edit"
            render={() => <TodoEdit updateTodo={updateTodo} deleteTodo={deleteTodo} />}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
