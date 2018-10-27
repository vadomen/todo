import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { Task } from '../models/task';
import { CategoryService } from '../services/category.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  categories: Category[] = [];
  category: Category | false = false;
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
      .subscribe((tasks) => {
        this.tasks = tasks;
        this.category = false;
      });
  }

  destroyCategory(category: Category): void {
    this.categories = this.categories.filter(e => e !== category);
    this.categoryService.deleteCategory(category).subscribe();
  }
}
