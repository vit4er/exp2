import { Component, Input, OnInit } from '@angular/core';
import { IDynamo } from '../common/idynamo';

@Component({
  selector: 'app-flex-tab',
  templateUrl: './flex-tab.component.html',
  styleUrls: ['./flex-tab.component.scss'],
})
export class FlexTabComponent implements OnInit, IDynamo {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
