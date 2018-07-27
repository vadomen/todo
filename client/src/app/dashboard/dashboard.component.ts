import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Task } from '../task';
import { CategoryService } from '../category.service';
import { TaskService } from '../task.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  categories: Category[] = [];
  category: Category | false;
  tasks: Task[] = [];

  constructor(
    private categoryService: CategoryService,
    private taskService: TaskService,
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => {
        this.categories = categories;
        this.category = false;
      });
  }

  getCategoryTasks(category: Category): void {
    this.categoryService.getCategory(category._id)
      .subscribe(category => {
        this.category = category;
        this.tasks = category.tasks;
      });
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  destroyCategory(category: Category): void {
    this.categories = this.categories.filter(e => e !== category);
    this.categoryService.deleteCategory(category).subscribe();
  }
}
