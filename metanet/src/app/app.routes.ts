import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contactus',
    component : ContactusComponent
  }

];
