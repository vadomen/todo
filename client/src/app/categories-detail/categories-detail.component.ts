import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {CategoryService} from "../category.service";
import {Category} from "../category";

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
    this.categoryService.getCategory(id)
      .subscribe(category => this.category = category);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.update();
    } else {
      this.create();
    }
  }

  update(): void {
    this.categoryService.updateCategory(Object.assign(this.category, this.categoryForm.value))
      .subscribe(category => this.category = category);
  }

  create(): void {
    this.categoryService.addCategory(this.categoryForm.value as Category)
      .subscribe(category => this.category = category);
  }
}
