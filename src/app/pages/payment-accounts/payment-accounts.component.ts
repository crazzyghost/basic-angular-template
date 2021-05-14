import {Component, OnInit, ViewChild} from '@angular/core';
import {Property} from '../../models';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'payment-accounts-component',
  templateUrl: './payment-accounts.component.html',
  styleUrls: ['./payment-accounts.component.scss']
})
export class PaymentAccountsComponent implements OnInit {

  public accounts: Array<Property> = [];

  ngOnInit() {
  }
}
