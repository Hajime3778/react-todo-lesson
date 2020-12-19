import React, { useState } from 'react';
import TodoList from './views/TodoList/TodoList';
import TodoEdit from './views/TodoEdit/TodoEdit';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const dataList = [
  { id: 0, title: 'Reactのお勉強', description: 'Reactのチュートリアルをやる' },
  { id: 1, title: 'Todoアプリを作ってみる', description: 'かんたんなTodoアプリを作ってみよう！' },
];

function App() {
  const [todoList, setTodoList] = useState(dataList);

  const addTodo = (todo) => {
    const newTodoList = todoList.slice();
    newTodoList.push(todo);
    setTodoList(newTodoList);
  };

  const updateTodo = (selectedTodo) => {
    const newTodoList = todoList.slice();
    newTodoList.forEach((todo) => {
      if (todo.id === selectedTodo.id) {
        todo.title = selectedTodo.title;
        todo.description = selectedTodo.description;
      }
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (selectedTodo) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== selectedTodo.id;
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" render={() => <TodoList todoList={todoList} addTodo={addTodo} />} />
          <Route
            path="/edit/:id"
            render={() => (
              <TodoEdit todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            )}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
