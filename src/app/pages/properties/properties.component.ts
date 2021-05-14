import { Component, OnInit } from "@angular/core";
import { Property } from "../../models";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "properties-component",
  templateUrl: "./properties.component.html",
  styleUrls: ["./properties.component.scss"],
})
export class PropertiesComponent implements OnInit {
  public properties: Array<Property> = [];

  ngOnInit() {
    setTimeout(() => this.getProperties(), 1000);
  }

  getProperties(): void {
    const data = [
      {
        id: "12e41jeddjcninae2343",
        name: "Trasaco",
        location: "East Legon",
        availableShares: 0,
        sharePrice: 500,
        holdPeriod: "9 months",
        yield: 0.2,
        cashMultiple: 2,
        irr: null,
        netPresentValue: 20000,
        primaryMaterial: "Rammed Earth",
        imageUrl: "assets/images/house-1.jpeg",
      },
      {
        id: "12e41jeddjcninae1232",
        name: "Beach Ballers",
        location: "Oyarifa Adenta",
        availableShares: 100,
        sharePrice: 200,
        holdPeriod: "6 months",
        yield: 0.4,
        cashMultiple: 3,
        irr: null,
        netPresentValue: 50000,
        primaryMaterial: "Rammed Earth",
        imageUrl: "assets/images/house-2.jpeg",
      },
    ];

    this.properties = [...data, ...data, ...data, ...data, ...data];

    console.log(this.properties);
  }
}
