import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MessagesComponent }    from './messages/messages.component';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    CategoriesDetailComponent,
    TasksComponent,
    TaskDetailComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class AppModule { }
