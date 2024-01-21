import { Route } from '@angular/router';

export const adminRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadComponent: () => import('../../components/admin/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'settings',
    loadComponent: () => import('../../components/admin/settings/settings.component').then(m => m.SettingsComponent)
  }
];
