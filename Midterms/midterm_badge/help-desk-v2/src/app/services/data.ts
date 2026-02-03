import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, of, catchError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private cache$?: Observable<any[]>;

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<any[]>(this.apiUrl).pipe(
        shareReplay(1),
        catchError(() => of([]))
      );
    }
    return this.cache$;
  }
}
