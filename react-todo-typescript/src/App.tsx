import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TodoList from './views/TodoList/TodoList';
import TodoEdit from './views/TodoEdit/TodoEdit';
import { TodoListProvider } from 'src/store/TodoListContext';

const App: React.FC = () => {
  return (
    <TodoListProvider>
      <div className="App">
        <Router>
          <Route exact path="/" component={TodoList} />
          <Route path="/edit/:id" component={TodoEdit} />
        </Router>
      </div>
    </TodoListProvider>
  );
};

export default App;
