import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  // FIX: pointing to home.html, not home.component.html
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private dataService = inject(DataService);
  posts$: Observable<any[]> = this.dataService.getAllPosts();
}
