import { Route } from 'react-router';
import React from 'react';
import TasksRouter from './pages/tasks/router';
import DashboardRouter from './pages/dashboard/router';
import CategoriesRouter from './pages/categories/router';

const routes = [...DashboardRouter, ...TasksRouter, ...CategoriesRouter];

const BaseRouter = routes.map((route, index) => (
  <Route
    key={index}
    path={route.path}
    // @ts-ignore
    exact={route.exact}
    // @ts-ignore
    component={route.component}
  />
));

export default BaseRouter;
