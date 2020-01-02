import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { ReviewComponent } from '../review/review.component';
import { AdminComponent } from '../admin/admin.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'home/:userName', component: HomeComponent },
  { path: 'admin/:userName', component: AdminComponent },
  { path: 'review/:id', component: ReviewComponent },
  { path: 'contact/:userName', component: ContactUsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];