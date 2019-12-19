import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { ReviewComponent } from '../review/review.component';
import { AdminComponent } from '../admin/admin.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

export const routes: Routes = [
    { path: 'login',  component: LoginComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'admin',     component: AdminComponent },
  { path: 'about',     component: AboutUsComponent },
  { path: 'contact',     component: ContactUsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];