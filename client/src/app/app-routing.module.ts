import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import {TaskDetailComponent} from "./task-detail/task-detail.component";
import {TasksComponent} from "./tasks/tasks.component";
import {CategoriesComponent} from "./categories/categories.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: DashboardComponent },
  { path: 'tasks/:id', component: TaskDetailComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/new', component: TasksComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
