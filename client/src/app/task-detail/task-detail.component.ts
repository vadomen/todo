import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {pickBy, isBoolean} from 'lodash'
import {TaskService} from "../services/task.service";
import {Task} from '../models/task';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../models/category";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: Task;
  category: Category;
  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    status:  new FormControl(''),
    remind: new FormControl(''),
  });

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private taskService: TaskService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.getTask();
    this.getCategory();
  }

  getTask(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.taskService.getTask(id).subscribe(task => this.task = task);
    }
  }

  getCategory(): void {
    const id = this.route.snapshot.paramMap.get('categoryId');
    if(id) {
      this.categoryService.getCategory(id)
        .subscribe(category => this.category = category);
    }
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.update();
    } else {
      this.create();
    }
  }

  update(): void {
    const data = pickBy(this.taskForm.value, x => x !== '');
    data._id = this.task._id;
    this.taskService.updateTask(data as Task)
      .subscribe(() => this.goBack());
  }

  create(): void {
    const data = this.taskForm.value;
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    data.categories = categoryId ? [categoryId] : [];
    data.status = isBoolean(data.status) ? data.status : false;
    this.taskService.addTask(this.taskForm.value as Task)
      .subscribe(() => this.goBack());
  }
}
