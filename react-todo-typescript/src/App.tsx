import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Todo } from 'src/model/Todo';
import TodoList from './views/TodoList/TodoList';
import TodoEdit from './views/TodoEdit/TodoEdit';

const dataList: Todo[] = [
  {
    id: 0,
    title: 'Reactのお勉強',
    description: 'Reactのチュートリアルをやる',
  },
  {
    id: 1,
    title: 'Todoアプリを作ってみる',
    description: 'Typescriptでやってみよう',
  },
];

const App: React.FC = () => {
  const [todoList, setTodoList] = useState(dataList);

  const addTodo = (todo: Todo) => {
    const newTodoList = todoList.slice();
    newTodoList.push(todo);
    setTodoList(newTodoList);
  };

  const updateTodo = (selectedTodo: Todo) => {
    const newTodoList = todoList.slice();
    newTodoList.forEach((todo) => {
      if (todo.id === selectedTodo.id) {
        todo.title = selectedTodo.title;
        todo.description = selectedTodo.description;
      }
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (selectedTodo: Todo) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.title !== selectedTodo.title;
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
          path="/edit/:id"
          render={() => (
            <TodoEdit
              todoList={todoList}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          )}
        />
      </Router>
    </div>
  );
};

export default App;
