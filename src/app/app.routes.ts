import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/scan',
    pathMatch: 'full'
  },
  {
    path: 'scan',
    loadChildren: () => import('./features/cat-scan/cat-scan.routes').then(m => m.CAT_SCAN_ROUTES)
  }
];
