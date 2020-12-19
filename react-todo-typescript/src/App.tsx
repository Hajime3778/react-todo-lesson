import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TodoList from './views/TodoList/TodoList';
import TodoEdit from './views/TodoEdit/TodoEdit';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={TodoList} />
        <Route path="/edit" component={TodoEdit} />
      </Router>
    </div>
  );
};

export default App;
