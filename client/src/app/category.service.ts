import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Category } from './category';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CategoryService {

  private categoriesUrl = 'http://localhost:3000/categories';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getCategories (): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
      .pipe(
        catchError(this.handleError('getCategories', []))
      );
  }

  getCategory(id: string): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url).pipe(
      catchError(this.handleError<Category>(`getCategories id=${id}`))
    );
  }

  searchCategories(term: string): Observable<Category[]> {
    if (!term.trim()) {
      // if not search term, return empty task array.
      return of([]);
    }
    return this.http.get<Category[]>(`${this.categoriesUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Category[]>('searchCategories', []))
    );
  }

  addCategory (category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoriesUrl, category, httpOptions).pipe(
      catchError(this.handleError<Category>('addCategory'))
    );
  }

  deleteCategory (category: Category | string): Observable<Category> {
    const id = typeof category === 'string' ? category : category._id;
    const url = `${this.categoriesUrl}/${id}`;

    return this.http.delete<Category>(url, httpOptions).pipe(
      catchError(this.handleError<Category>('deleteCategory'))
    );
  }

  updateCategory (category: Category): Observable<any> {
    return this.http.put(this.categoriesUrl, category, httpOptions).pipe(
      catchError(this.handleError<any>('updateCategory'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`CategoryService: ${message}`);
  }
}
