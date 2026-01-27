import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, map } from 'rxjs';
import { User, Todo, TodoResponse } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class Httpclient {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private todosUrl = 'https://dummyjson.com/todos';

  constructor(private http: HttpClient) { }

  getUsersRemotely(): Observable<User[]> {
    const cachedUsers = localStorage.getItem('users');
    if (cachedUsers) return of(JSON.parse(cachedUsers));

    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(users => localStorage.setItem('users', JSON.stringify(users)))
    );
  }


  getTodosRemotely(): Observable<Todo[]> {
    const cachedTodos = localStorage.getItem('todos');
    if (cachedTodos) return of(JSON.parse(cachedTodos));

    return this.http.get<TodoResponse>(this.todosUrl).pipe(
      map(response => response.todos),
      tap(todos => localStorage.setItem('todos', JSON.stringify(todos)))
    );
  }
}
