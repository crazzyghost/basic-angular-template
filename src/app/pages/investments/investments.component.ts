import {Component, OnInit} from '@angular/core';
import {Property} from '../../models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'investments-component',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent implements OnInit {
  public investments: Array<Property> = [];

  ngOnInit() {
  }
}
