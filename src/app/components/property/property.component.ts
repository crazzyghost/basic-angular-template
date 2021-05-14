import { Component, Input, OnInit } from "@angular/core";
import { Property } from "../../models";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "property",
  templateUrl: "property.component.html",
  styleUrls: ["property.component.scss"],
})
export class PropertyComponent implements OnInit {
  @Input()
  property: Property;

  ngOnInit(): void {
    console.log(JSON.stringify(this.property));
  }
}
