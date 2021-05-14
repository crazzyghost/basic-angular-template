import {Component, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'no-data',
  templateUrl: 'no-data.component.html',
  styleUrls: ['no-data.component.scss']
})
export class NoDataComponent {
  @Input()
  imageUrl: string;
  @Input()
  message: string;
  @Input()
  retry: Array<string>;
}
