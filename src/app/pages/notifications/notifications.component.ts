import {Component, OnInit} from '@angular/core';
import {Property} from '../../models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'notifications-component',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  public messages: Array<Property> = [];

  ngOnInit() {
  }
}
