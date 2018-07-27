import { Component, OnInit, Input } from '@angular/core';
import {TaskService} from "../task.service";
import {ActivatedRoute} from "@angular/router";
import {Task} from "../task";

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
    private route: ActivatedRoute,
  ) { }

  @Input() categoryTasks: Task[] = [];

  ngOnInit() {
    this.getTasks()
  }

  ngOnChanges() {
    this.getTasks()
  }

  getTasks(): void {
    if (this.categoryTasks.length) {
      this.tasks = this.categoryTasks;
    } else {
      this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    }
  }
}
