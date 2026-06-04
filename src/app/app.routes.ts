import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [

  { path: '', component: Home },  // Ruta principal
  { path: 'home', component: Home },  // Ruta /home
  { path: '**', redirectTo: '' }
];
