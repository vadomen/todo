import { Component, OnInit, Input } from '@angular/core';
import {TaskService} from "../services/task.service";
import {CategoryService} from "../services/category.service";
import {ActivatedRoute} from "@angular/router";
import {Task} from "../models/task";
import {Category} from "../models/category";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];
  task: Task;

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  @Input() category: Category;

  ngOnChanges() {
    if(this.category && this.category.tasks) {
      this.tasks = this.category.tasks;
      return;
    }

    const categoryId: string = this.route.snapshot.queryParamMap.get('category');
    if(!categoryId) return this.getTasks();
    this.categoryService.getCategory(categoryId)
      .subscribe(category => {
        this.tasks = category.tasks;
      });
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  destroy(task: Task): void {
    this.tasks = this.tasks.filter(e => e !== task);
    this.taskService.deleteTask(task).subscribe();
  }
}
