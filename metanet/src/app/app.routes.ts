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
import { UserProfileComponent } from './usercomponents/user-profile/user-profile.component';
import { UserTransactionsComponent } from './usercomponents/user-transactions/user-transactions.component';

import {AdminPayoutsComponent} from "./admincomponents/admin-payouts/admin-payouts.component";
import {AdminSysAdminComponent} from "./admincomponents/admin-sys-admin/admin-sys-admin.component";
import {AdminModelsComponent} from "./admincomponents/admin-models/admin-models.component";
import { SettingsComponent } from './usercomponents/settings/settings.component';
import { MarketplaceProductsComponent } from './usercomponents/marketplace-products/marketplace-products.component';

import { MarketplaceCategoriesComponent } from './usercomponents/marketplace-categories/marketplace-categories.component';

import { UploadFormComponent } from './usercomponents/upload-form/upload-form.component';




export const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'contactus', component : ContactusComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registrationsuccess', component: RegistrationsuccessComponent},
  { path: 'ordersuccessful', component: OrdersuccessfulComponent},
  { path: 'marketplace-categories', component: MarketplaceCategoriesComponent},
  { path: 'marketplace-products', component: MarketplaceProductsComponent},
  { path: 'marketplace-checkout', component: MarketplaceCheckoutComponent},
  { path: 'marketplace-shoppingcart', component: MarketplaceShoppingcartComponent},
  { path: 'marketplace-product-description', component: MarketplaceProductDescriptionComponent},
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'usertransactions', component: UserTransactionsComponent },
  { path : 'settings', component: SettingsComponent},
  { path: 'upload-form', component: UploadFormComponent},


  // admin routes
  { path: 'admindashboard', component: AdminDashboardComponent},
  { path: 'admintransactions', component: AdminTransactionsComponent},
  { path: 'adminrevenue', component: AdminRevenueComponent},
  { path: 'adminpayouts', component: AdminPayoutsComponent},
  { path: 'adminsystem_admin', component: AdminSysAdminComponent},
  { path: 'adminmodel', component: AdminModelsComponent},





];
