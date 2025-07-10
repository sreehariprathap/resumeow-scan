import { Routes } from '@angular/router';

export const CAT_SCAN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./cat-scan.component').then(m => m.CatScanComponent)
  }
];
