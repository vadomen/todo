import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import {TaskDetailComponent} from "./task-detail/task-detail.component";
import {CategoriesDetailComponent} from "./categories-detail/categories-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'categories/new', component: CategoriesDetailComponent },
  { path: 'categories/:id', component: CategoriesDetailComponent },


  { path: 'tasks/new/:categoryId', component: TaskDetailComponent },
  { path: 'tasks/:id', component: TaskDetailComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
