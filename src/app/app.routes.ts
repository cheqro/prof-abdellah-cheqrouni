import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Bac01Component} from './lycee/bac01/bac01.component';
import {Bac02Component} from './lycee/bac02/bac02.component';
import {TroncCommunScienceComponent} from './lycee/tronc-commun-science/tronc-commun-science.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bac01', component: Bac01Component },
  { path: 'bac02', component: Bac02Component },
  { path: 'tronc-commun-science', component: TroncCommunScienceComponent },
];
