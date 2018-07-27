import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Task } from '../task';
import { CategoryService } from '../category.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  categories: Category[] = [];
  tasks: Task[] = [];

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  getCategoryTasks(category: Category): void {
    this.categoryService.getCategory(category._id)
      .subscribe(category => {
        this.tasks = category.tasks;
      });
  }
}
