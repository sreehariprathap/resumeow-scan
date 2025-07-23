import { Routes } from '@angular/router';

export const RESUMES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./resumes.component').then(m => m.ResumesComponent)
  }
];
