import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Todo } from 'src/model/Todo';
import TodoList from './views/TodoList/TodoList';
import TodoEdit from './views/TodoEdit/TodoEdit';

const dataList: Todo[] = [
  { title: 'Reactのお勉強', description: 'Reactのチュートリアルをやる' },
  { title: 'Todoアプリを作ってみる', description: 'Typescriptでやってみよう' },
];

const App: React.FC = () => {
  const [todoList, setTodoList] = useState(dataList);

  const addTodo = (todo: Todo) => {
    const newTodoList = todoList.slice();
    newTodoList.push(todo);
    setTodoList(newTodoList);
  };

  const updateTodo = (todo: Todo) => {
    const newTodoList = todoList.slice();
    newTodoList.forEach((targetTodo) => {
      if (targetTodo.title === todo.title) {
        targetTodo.title = todo.title;
        targetTodo.description = todo.description;
      }
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (todo: Todo) => {
    const newTodoList = todoList.filter((targetTodo) => {
      return targetTodo.title !== todo.title;
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          render={() => <TodoList todoListProps={todoList} addTodo={addTodo} />}
        />
        <Route
          path="/edit"
          render={() => (
            <TodoEdit updateTodo={updateTodo} deleteTodo={deleteTodo} />
          )}
        />
      </Router>
    </div>
  );
};

export default App;
