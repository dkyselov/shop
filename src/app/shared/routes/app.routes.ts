import { Routes } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { shopRoutes } from './shop.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../../pages/shop-page/shop-page.component').then(m => m.ShopPageComponent),
    children: shopRoutes
  },
  {
    path: 'admin',
    loadComponent: () => import('../../pages/admin-page/admin-page.component').then(m => m.AdminPageComponent),
    children: adminRoutes
  },
  {
    path: 'login',
    loadComponent: () => import('../../pages/login-page/login-page.component').then(m => m.LoginPageComponent)
  },
  {
    path: '**',
    loadComponent: () => import('../../pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent)
  },
];
