import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Category} from "../models/category";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  category: Category | false = false;

  constructor(
    private categoryService: CategoryService,
    private _router: Router,
    private route: ActivatedRoute
  ) { }


  @Output() currentCategory = new EventEmitter<Category | false>();

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => {
        this.categories = categories;
        const categoryId: string = this.route.snapshot.queryParamMap.get('category');
        this.category = categories.find(cat => cat._id === categoryId);
        this.currentCategory.emit(this.category);
      });
  }

  selectCategory(category: Category | false = false): void {
    if(!category) {
      this._router.navigate([], { queryParams: {} });
      this.category = false;
      this.currentCategory.emit(false);
      return;
    }
    this.categoryService.getCategory(category._id)
      .subscribe(category => {
        this.category = category;
        const queryParams = { category: category._id };
        this._router.navigate([], { queryParams });
        this.currentCategory.emit(category);
      });

  }

  destroy(category: Category): void {
    this.categories = this.categories.filter(e => e !== category);
    this.categoryService.deleteCategory(category).subscribe();
  }

}
