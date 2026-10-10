import { Routes } from '@angular/router';

import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
