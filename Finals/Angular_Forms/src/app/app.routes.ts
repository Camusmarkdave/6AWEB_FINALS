// app.routes.ts
import { Routes } from '@angular/router';
import { TemplateDemo } from './template-demo/template-demo.component';
import { ReactiveDemo } from './reactive-demo/reactive-demo.component';

export const routes: Routes = [
  { path: 'template', component: TemplateDemo },
  { path: 'reactive', component: ReactiveDemo },
  { path: '', redirectTo: '/template', pathMatch: 'full' }
];
