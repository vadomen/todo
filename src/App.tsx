import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './BaseRouter';
import Menu from './components/menu';

function TodoApp() {
  return (
    <Router>
      <div>
        {Menu}
        {BaseRouter}
      </div>
    </Router>
  );
}

export default TodoApp;
