import { Component, OnInit, Input } from '@angular/core';
import {TaskService} from "../services/task.service";
import {ActivatedRoute} from "@angular/router";
import {Task} from "../models/task";
import {Category} from "../models/category";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  task: Task;

  constructor(
    private taskService: TaskService,
  ) { }

  @Input() categoryTasks: Task[] = [];
  @Input() category: Category;

  ngOnInit() {
    this.getTasks()
  }

  ngOnChanges() {
    this.getCategoryTasks()
  }

  getCategoryTasks() {
    this.tasks = this.categoryTasks;
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  destroy(task: Task): void {
    this.tasks = this.tasks.filter(e => e !== task);
    this.taskService.deleteTask(task).subscribe();
  }
}
