import { Routes } from '@angular/router';
import { HomepageComponent } from './usercomponents/homepage/homepage.component';
import { AboutusComponent } from './usercomponents/aboutus/aboutus.component';
import { ServicesComponent } from './usercomponents/services/services.component';
import { ContactusComponent } from './usercomponents/contactus/contactus.component';
import { LoginComponent } from './usercomponents/login/login.component';
<<<<<<< HEAD
import {RegistrationsuccessComponent } from './usercomponents/registrationsuccess/registrationsuccess.component';
=======
import { AdminDashboardComponent } from './admincomponents/admin-dashboard/admin-dashboard.component';
>>>>>>> 3292f20feee2c9fe3bd1ab606d4c8953f8b16bad

export const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'contactus', component : ContactusComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registrationsuccess', component: RegistrationsuccessComponent},

  // admin routes
  { path: 'adminDashboard', component: AdminDashboardComponent}




];
