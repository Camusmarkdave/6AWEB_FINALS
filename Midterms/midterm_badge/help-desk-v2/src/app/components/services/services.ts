import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data';
import { TruncatePipe } from '../../pipes/truncate-pipe'; // Matches your file name
import { Observable, combineLatest, map, startWith } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  private dataService = inject(DataService);

  searchControl = new FormControl('');

  // Rubric Requirement: Search + Async Pipe
  filteredPosts$: Observable<any[]> = combineLatest([
    this.dataService.getAllPosts(),
    this.searchControl.valueChanges.pipe(startWith(''))
  ]).pipe(
    map(([posts, searchTerm]) => {
      const term = (searchTerm || '').toLowerCase();
      return posts.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.body.toLowerCase().includes(term)
      );
    })
  );
}
