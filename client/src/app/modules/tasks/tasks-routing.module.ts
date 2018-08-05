import { NgModule } from '@angular/core';

import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [{
  path: 'create',
  component: CreateNewCategoriesPageComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class CategoriesModule { }
