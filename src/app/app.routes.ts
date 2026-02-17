import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Page404 } from './pages/page-404/page-404';
import { Register } from './pages/register/register';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Page404 },
];
