import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { Task } from '../models/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  category: Category | false = false;

  constructor() { }

  ngOnInit() {

  }

  onSelectCategory(category) {
    this.category = category;
  }
}
