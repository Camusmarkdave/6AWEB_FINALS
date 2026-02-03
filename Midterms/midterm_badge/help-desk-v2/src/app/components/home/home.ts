import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private dataService = inject(DataService);
  posts$: Observable<any[]> = this.dataService.getAllPosts();

  // RELIABLE Food Images (Chicken Rice, Laksa, Satay, Noodles, Curry)
  foodImages: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Hainanese_Chicken_Rice.jpg/800px-Hainanese_Chicken_Rice.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtytHuF705DPGzmEIIrn3lvwVNz6g0Ppq48w&s',
    'https://www.elmundoeats.com/wp-content/uploads/2024/09/Char-kway-teow-for-FP-2.jpg',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2025/02/14/FN_Buddha-Lo_Singaporean-Chili-Crab_s4x3.jpg.rend.hgtvcom.616.462.suffix/1739567480839.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3D-nGwU3P9eRKGQjvJvfKqUCgl3_Ag-qZw&s'
  ];

  getImage(index: number): string {
    // Safety check: always return an image even if index is high
    return this.foodImages[index % this.foodImages.length];
  }
}
