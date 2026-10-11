import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { NotFoundComponent } from './not-found/not-found';
import { Home } from './home/home';
import { Productos } from './productos/productos';
import { Ofertas } from './ofertas/ofertas';
import { Carrito } from './carrito/carrito';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'productos', component: Productos },
  { path: 'ofertas', component: Ofertas },

  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'carrito', component: Carrito},

  { path: '**', component: NotFoundComponent },
];
