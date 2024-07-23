import { Routes } from '@angular/router';
import { HomepageComponent } from './usercomponents/homepage/homepage.component';
import { AboutusComponent } from './usercomponents/aboutus/aboutus.component';
import { ServicesComponent } from './usercomponents/services/services.component';
import { ContactusComponent } from './usercomponents/contactus/contactus.component';
import { LoginComponent } from './usercomponents/login/login.component';
import { RegistrationsuccessComponent } from './usercomponents/registrationsuccess/registrationsuccess.component';
import { AdminDashboardComponent } from './admincomponents/admin-dashboard/admin-dashboard.component';
import { OrdersuccessfulComponent } from './usercomponents/ordersuccessful/ordersuccessful.component';
import { MarketplaceCheckoutComponent } from './usercomponents/marketplace-checkout/marketplace-checkout.component';
import { AdminTransactionsComponent } from './admincomponents/admin-transactions/admin-transactions.component';
import { AdminRevenueComponent } from './admincomponents/admin-revenue/admin-revenue.component';

import { MarketplaceShoppingcartComponent } from './usercomponents/marketplace-shoppingcart/marketplace-shoppingcart.component';
import { MarketplaceProductDescriptionComponent } from './usercomponents/marketplace-product-description/marketplace-product-description.component';
import { UserprofileModelsComponent } from './usercomponents/userprofile-models/userprofile-models.component';
import { UserprofileCollectionsComponent } from './usercomponents/userprofile-collections/userprofile-collections.component';


export const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'contactus', component : ContactusComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registrationsuccess', component: RegistrationsuccessComponent},
  { path: 'ordersuccessful', component: OrdersuccessfulComponent},
  { path: 'marketplace-checkout', component: MarketplaceCheckoutComponent},
  { path: 'marketplace-shoppingcart', component: MarketplaceShoppingcartComponent},
  { path: 'marketplace-product-description', component: MarketplaceProductDescriptionComponent},
  { path: 'userprofile-models', component: UserprofileModelsComponent},
  { path: 'userprofile-collections', component: UserprofileCollectionsComponent},



  // admin routes
  { path: 'adminDashboard', component: AdminDashboardComponent},
  { path: 'admintransactions', component: AdminTransactionsComponent},
  { path: 'adminrevenue', component: AdminRevenueComponent}




];
