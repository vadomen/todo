import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {pickBy} from 'lodash';
import {Location} from "@angular/common";
import {CategoryService} from "../services/category.service";
import {Category} from "../models/category";

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.css']
})
export class CategoriesDetailComponent implements OnInit {
  category: Category;
  categoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('')
  });


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id && id !== 'new') {
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
    const data = pickBy(this.categoryForm.value, x => x !== '');
    data._id = this.category._id;
    this.categoryService.updateCategory(data as Category)
      .subscribe(() => this.goBack());
  }

  create(): void {
    this.categoryService.addCategory(this.categoryForm.value as Category)
      .subscribe(() => this.goBack());
  }
}
