import { NgModule } from "@angular/core";
import { TopBarComponent } from "./topbar/topbar.component";
import { CommonModule } from "@angular/common";
import {
  MatBadgeModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule,
} from "@angular/material";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavItemComponent } from "./sidebar/nav-item.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    RouterModule,
    MatBadgeModule,
    MatMenuModule,
  ],
  declarations: [TopBarComponent, SidebarComponent, NavItemComponent],
  exports: [TopBarComponent, SidebarComponent],
})
export class SharedModule {}
