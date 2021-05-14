import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginRegisterComponent} from './pages/login-register/login-register.component';
import {PropertiesComponent} from './pages/properties/properties.component';
import {UserPropertiesComponent} from './pages/user-properties/user-properties.component';
import {InvestmentsComponent} from './pages/investments/investments.component';
import {PaymentAccountsComponent} from './pages/payment-accounts/payment-accounts.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {NotificationsComponent} from './pages/notifications/notifications.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginRegisterComponent},
  { path: 'app/dashboard', component: DashboardComponent},
  { path: 'app/properties', component: PropertiesComponent},
  { path: 'app/user-properties', component: UserPropertiesComponent},
  { path: 'app/investments', component: InvestmentsComponent},
  { path: 'app/payment-accounts', component: PaymentAccountsComponent},
  { path: 'app/profile', component: ProfileComponent},
  { path: 'app/notifications', component: NotificationsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
