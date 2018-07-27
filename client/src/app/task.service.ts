import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Task } from './task';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class TaskService {

  private tasksUrl = 'http://localhost:3000/tasks';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        catchError(this.handleError('getTasks', []))
      );
  }

  getTask(id: string): Observable<Task> {
    const url = `${this.tasksUrl}/${id}?populate=categories`;
    return this.http.get<Task>(url).pipe(
      catchError(this.handleError<Task>(`getTasks id=${id}`))
    );
  }

  searchTasks(term: string): Observable<Task[]> {
    if (!term.trim()) {
      // if not search term, return empty task array.
      return of([]);
    }
    return this.http.get<Task[]>(`${this.tasksUrl}/?title=${term}`).pipe(
      catchError(this.handleError<Task[]>('searchTasks', []))
    );
  }

  addTask (task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions).pipe(
      catchError(this.handleError<Task>('addTask'))
    );
  }

  deleteTask (task: Task | string): Observable<Task> {
    const id = typeof task === 'string' ? task : task._id;
    const url = `${this.tasksUrl}/${id}`;

    return this.http.delete<Task>(url, httpOptions).pipe(
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  updateTask (task: Task): Observable<any> {
    const id = typeof task === 'string' ? task : task._id;
    return this.http.put(`${this.tasksUrl}/${id}`, task, httpOptions).pipe(
      catchError(this.handleError<any>('updateTask'))
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
    this.messageService.add(`TaskService: ${message}`);
  }
}
