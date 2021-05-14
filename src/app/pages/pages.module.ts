import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSidenavModule, MatSortModule, MatTableModule,
  MatTabsModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {LoginRegisterComponent} from './login-register/login-register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PropertiesComponent} from './properties/properties.component';
import {UserPropertiesComponent} from './user-properties/user-properties.component';
import {InvestmentsComponent} from './investments/investments.component';
import {PaymentAccountsComponent} from './payment-accounts/payment-accounts.component';
import {ProfileComponent} from './profile/profile.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {ComponentsModule} from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    ComponentsModule,
    MatRippleModule,
    MatTableModule,
    MatSortModule,
  ],
  declarations: [
    DashboardComponent,
    LoginRegisterComponent,
    PropertiesComponent,
    UserPropertiesComponent,
    InvestmentsComponent,
    PaymentAccountsComponent,
    ProfileComponent,
    NotificationsComponent,
  ],
  exports: [
    DashboardComponent,
    LoginRegisterComponent,
    PropertiesComponent,
    UserPropertiesComponent,
    InvestmentsComponent,
    PaymentAccountsComponent,
    ProfileComponent,
    NotificationsComponent,
  ],
})
export class PageModule {
}
