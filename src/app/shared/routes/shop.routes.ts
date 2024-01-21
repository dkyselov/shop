import { Route } from '@angular/router';

export const shopRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('../../components/shop/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('../../components/shop/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'products/:id',
    loadComponent: () => import('../../components/shop/products/details/details.component').then(m => m.DetailsComponent)
  }
];
