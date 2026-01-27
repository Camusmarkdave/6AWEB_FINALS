import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Httpclient } from './httpclient.service';
import { User, Todo } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  protected readonly title = signal('http-client-demo');
  httpusers: User[] = [];
  httptodos: Todo[] = [];

  constructor(private httpClient: Httpclient) {}

  ngOnInit() {
    this.httpClient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data.slice(0, 5);
    });

    this.httpClient.getTodosRemotely().subscribe((data) => {
      this.httptodos = data.slice(0, 5);
    });
  }
}
