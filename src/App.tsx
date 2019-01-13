import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './BaseRouter';
import Dashboard from './pages/dashboard';

function TodoApp() {
  return (
    <Router>
      <div>
        <Dashboard />
        {BaseRouter}
      </div>
    </Router>
  );
}

export default TodoApp;
