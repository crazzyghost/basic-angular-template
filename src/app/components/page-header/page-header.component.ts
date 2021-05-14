import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'page-header',
  templateUrl: 'page-header.component.html',
  styleUrls: ['page-header.component.scss']
})
export class PageHeaderComponent implements OnInit{
  @Input()
  title: string;
  @Input()
  subtitle: string;

  ngOnInit(): void {
  }
}
