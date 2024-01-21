import { Route } from '@angular/router';
import {DetailsComponent} from "../../components/shop/products/details/details.component";

export const shopRoutes: Route[] = [
  {
    path: 'products',
    loadComponent: () => import('../../components/shop/products/products.component').then(m => m.ProductsComponent)
  },
  { path: 'products/:id', component: DetailsComponent }
];
