import { Routes } from '@angular/router';
import { HomepageComponent } from './usercomponents/homepage/homepage.component';
import { AboutusComponent } from './usercomponents/aboutus/aboutus.component';
import { ServicesComponent } from './usercomponents/services/services.component';
import { ContactusComponent } from './usercomponents/contactus/contactus.component';
import { SidebarComponent } from './admincomponents/sidebar/sidebar.component';
import { Component } from '@angular/core';
import { LoginComponent } from './usercomponents/login/login.component';
import {RegistrationsuccessComponent } from './usercomponents/registrationsuccess/registrationsuccess.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'contactus', component : ContactusComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registrationsuccess', component: RegistrationsuccessComponent},

  {path:'sidebar', component: SidebarComponent}

];
