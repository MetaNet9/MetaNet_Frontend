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
import {SettingsComponent } from './usercomponents/settings/settings.component';
import {MarketplaceProductsComponent } from './usercomponents/marketplace-products/marketplace-products.component';
import {SysDashboardComponent} from "./sysAdminComponents/sys-dashboard/sys-dashboard.component";
import {SysModelsComponent} from "./sysAdminComponents/sys-models/sys-models.component";
import {SysSysAdminComponent} from "./sysAdminComponents/sys-sys-admin/sys-sys-admin.component";
import {SysCreatorComponent} from "./sysAdminComponents/sys-creator/sys-creator.component";
import {SysUsersComponent} from "./sysAdminComponents/sys-users/sys-users.component";
import {SysModaratorComponent} from "./sysAdminComponents/sys-modarator/sys-modarator.component";
import {ModDashboardComponent} from "./ModaratorComponents/mod-dashboard/mod-dashboard.component";
import {ModUsersComponent} from "./ModaratorComponents/mod-users/mod-users.component";
import {ModCreatorsComponent} from "./ModaratorComponents/mod-creators/mod-creators.component";

import { MarketplaceCategoriesComponent } from './usercomponents/marketplace-categories/marketplace-categories.component';

import { UploadFormComponent } from './usercomponents/upload-form/upload-form.component';
import { ForgotPasswordComponent } from './usercomponents/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './usercomponents/new-password/new-password.component';
import { BecomeCreatorComponent } from './usercomponents/become-creator/become-creator.component';
import { UploadSuccessComponent } from './usercomponents/upload-success/upload-success.component';





export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'new-password', component: NewPasswordComponent },
  { path: 'become-creator', component: BecomeCreatorComponent},
  { path: 'upload-success', component: UploadSuccessComponent },
  


  // admin routes
  { path: 'admindashboard', component: AdminDashboardComponent},
  { path: 'admintransactions', component: AdminTransactionsComponent},
  { path: 'adminrevenue', component: AdminRevenueComponent},
  {path: 'adminpayouts', component: AdminPayoutsComponent},
  {path: 'adminsystem_admin', component: AdminSysAdminComponent},
  {path: 'adminmodel', component: AdminModelsComponent},

  //sys-admin routes
  {path: 'sysadmin_dashboard', component: SysDashboardComponent},
  {path: 'sysadmin_modals', component: SysModelsComponent},
  {path: 'sysadmin_system_admin', component: SysSysAdminComponent},
  {path: 'sysadmin_creator', component: SysCreatorComponent},
  {path: 'sysadmin_users', component: SysUsersComponent},
  {path: 'sysadmin_modarator', component: SysModaratorComponent},

  //moderator routes

  {path: 'mod_dashboard', component: ModDashboardComponent},
  {path: 'mod_users', component: ModUsersComponent},
  {path: 'mod_creator', component: ModCreatorsComponent},


];
