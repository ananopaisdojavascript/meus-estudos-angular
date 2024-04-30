import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'orders',
    loadComponent: () => import('@myngapp/orders-lib').then((m) => m.OrdersLibComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('@myngapp/products-lib').then((m) => m.ProductsLibComponent)
  }
];
