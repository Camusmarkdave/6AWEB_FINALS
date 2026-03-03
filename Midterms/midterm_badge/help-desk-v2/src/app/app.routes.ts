import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  // 1. This line makes Home the "Index" / Default page
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // 2. These lines allow the other pages to load when clicked
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },

  // 3. This is a safety net: if they type nonsense, go to Home
  { path: '**', redirectTo: 'home' }
];
