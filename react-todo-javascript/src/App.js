import React, { Component } from 'react';
import TodoList from './views/TodoList/TodoList';
import TodoEdit from './views/TodoEdit/TodoEdit';
import { TodoListProvider } from './store/TodoListContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <TodoListProvider>
        <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={TodoList} />
              <Route path="/edit/:id" component={TodoEdit} />
            </div>
          </Router>
        </div>
      </TodoListProvider>
    );
  }
}

export default App;
