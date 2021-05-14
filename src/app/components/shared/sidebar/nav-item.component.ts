import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "nav-item",
  template: `
    <div
      class="nav-item"
      matRipple
      [class.expanded]="expanded"
      [class.selected]="selected"
      (click)="onHandleClick()"
    >
      <span class="icon">
        <mat-icon mat-list-icon>{{ icon }}</mat-icon>
      </span>
      <span class="title">
        {{ title }}
      </span>
      <span class="toggle">
        <mat-icon mat-list-icon *ngIf="subNav.length > 0 && !expanded"
          >chevron_right</mat-icon
        >
        <mat-icon mat-list-icon *ngIf="subNav.length > 0 && expanded"
          >keyboard_arrow_down</mat-icon
        >
      </span>
    </div>
    <mat-divider></mat-divider>
    <div *ngIf="expanded && subNav.length > 0">
      <div *ngFor="let nav of subNav" class="sub-nav">
        <div class="nav-item" matRipple routerLink="{{ nav.url }}">
          <span class="icon">
            <mat-icon mat-list-icon>{{ nav.icon }}</mat-icon>
          </span>
          <span class="title">
            {{ nav.title }}
          </span>
        </div>
        <mat-divider></mat-divider>
      </div>
    </div>
  `,
  styleUrls: ["./sidebar.component.scss"],
})
export class NavItemComponent implements OnInit {
  public expanded = false;
  @Input()
  title: string;
  @Input()
  icon: string;
  @Input()
  subNav: Array<string> = [];
  @Input()
  url: string;
  @Input()
  selected = false;

  ngOnInit(): void {}

  constructor(private router: Router) {}

  get hasSubNavigation(): boolean {
    return this.subNav.length > 0;
  }

  onHandleClick() {
    if (this.hasSubNavigation) {
      this.expanded = !this.expanded;
    } else {
      this.router
        .navigateByUrl(this.url)
        .catch((reason) => console.log(reason));
    }
  }
}
