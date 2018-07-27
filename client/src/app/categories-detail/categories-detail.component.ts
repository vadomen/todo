import {Component, Input, OnInit} from '@angular/core';
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
  @Input() category: Category;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id)
      .subscribe(category => this.category = category);
  }

}
