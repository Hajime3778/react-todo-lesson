import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoEdit from './TodoEdit';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={TodoList} />
            <Route path="/edit" component={TodoEdit} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;