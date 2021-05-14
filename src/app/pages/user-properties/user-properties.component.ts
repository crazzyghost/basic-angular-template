import {Component, OnInit} from '@angular/core';
import {Property} from '../../models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-properties-component',
  templateUrl: './user-properties.component.html',
  styleUrls: ['./user-properties.component.scss']
})
export class UserPropertiesComponent implements OnInit {
  public properties: Array<Property> = [];

  ngOnInit() {
  }

}
