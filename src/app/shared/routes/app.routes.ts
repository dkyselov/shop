import { Routes } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { shopRoutes } from './shop.routes';

export const routes: Routes = [
  {
    path: 'admin-page',
    loadComponent: () => import('../../pages/admin-page/admin-page.component').then(m => m.AdminPageComponent),
    children: adminRoutes
  },
  {
    path: '',
    loadComponent: () => import('../../components/shop/products/products.component').then(m => m.ProductsComponent),
    children: shopRoutes
  },
  {
    path: '*',
    loadComponent: () => import('../../pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent)
  },
  {
    path: 'login-page',
    loadComponent: () => import('../../pages/login-page/login-page.component').then(m => m.LoginPageComponent)
  },
];
