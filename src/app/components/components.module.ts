import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./shared/shared.module";
import { PageHeaderComponent } from "./page-header/page-header.component";
import { PropertyComponent } from "./property/property.component";
import { NoDataComponent } from "./no-data/no-data.component";
import { MatRippleModule } from "@angular/material";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, SharedModule, MatRippleModule, RouterModule],
  declarations: [PageHeaderComponent, PropertyComponent, NoDataComponent],
  exports: [
    SharedModule,
    PageHeaderComponent,
    PropertyComponent,
    NoDataComponent,
  ],
})
export class ComponentsModule {}
