import { Routes } from '@angular/router';

// 1. Notice these match the exact class names in your files now
import { TemplateDemo } from './template-demo/template-demo.component';
import { ReactiveDemo } from './reactive-demo/reactive-demo.component';

// 2. Import your new register component
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: 'template', component: TemplateDemo },
  { path: 'reactive', component: ReactiveDemo },
  { path: 'register', component: RegisterComponent }, // New Tab Route
  { path: '', redirectTo: '/template', pathMatch: 'full' }
];