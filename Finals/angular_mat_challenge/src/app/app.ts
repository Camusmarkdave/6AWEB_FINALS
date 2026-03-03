import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TournamentFormComponent } from './tournament-form/tournament-form'; // Make sure this path is correct

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TournamentFormComponent, MatSlideToggleModule],
  
  // 👇 CHANGE THIS LINE based on your actual HTML file name:
  // If your file is app.html, make it './app.html'
  // If your file is app.component.html, make it './app.component.html'
  templateUrl: './app.html', 
  
  // 👇 Do the same for your CSS file:
  styleUrl: './app.css'
})
export class App { 
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}