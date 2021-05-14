import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Renderer,
  Renderer2,
} from "@angular/core";
import { MediaService } from "../../../services/media.service";

@Component({
  styleUrls: ["sidebar.component.scss"],
  templateUrl: "sidebar.component.html",
  // tslint:disable-next-line:component-selector
  selector: "side-bar",
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input()
  selectedIndex: number;

  public sideBarHovering = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  get navigation(): Array<object> {
    return this._navigation;
  }

  // tslint:disable-next-line:variable-name
  private _navigation: Array<object> = [
    {
      icon: "assessment",
      title: "Dashboard",
      url: "/app/dashboard",
    },
    {
      icon: "home",
      title: "Properties",
      subNav: [
        {
          icon: "house",
          title: "My Properties",
          url: "/app/user-properties",
        },
        {
          icon: "apartment",
          title: "All Properties",
          url: "/app/properties",
        },
      ],
    },
    {
      icon: "money",
      title: "Investments",
      url: "/app/investments",
    },
    {
      icon: "credit_card",
      title: "Payment Accounts",
      url: "/app/payment-accounts",
    },
  ];

  toggleNav(): void {
    const sideBar = this.el.nativeElement.querySelector("#side-bar");
    this.sideBarHovering = !this.sideBarHovering;
    if (this.sideBarHovering) {
      this.renderer.addClass(sideBar, "side-bar-hovering");
    } else {
      this.renderer.removeClass(sideBar, "side-bar-hovering");
    }
    console.log(this.sideBarHovering);
  }

  ngOnDestroy(): void {
    // this.mediaService.subject.unsubscribe();
  }
}
