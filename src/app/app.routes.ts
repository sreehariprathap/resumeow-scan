import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'scan',
    loadChildren: () => import('./features/cat-scan/cat-scan.routes').then(m => m.CAT_SCAN_ROUTES)
  },
  {
    path: 'resumes',
    loadChildren: () => import('./features/resumes/resumes.routes').then(m => m.RESUMES_ROUTES)
  }
];
