import {Component, Input, OnInit} from '@angular/core';
import {IAddCmp} from "../cmp-holder/i-add-cmp";

@Component({
  selector: 'app-flex-tab',
  templateUrl: './flex-tab.component.html',
  styleUrls: ['./flex-tab.component.scss']
})
export class FlexTabComponent implements OnInit,IAddCmp {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }


}
