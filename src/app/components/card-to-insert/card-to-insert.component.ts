import { Component, Input } from '@angular/core';
import { IAddCmp } from '../cmp-holder/i-add-cmp';

@Component({
  selector: 'app-card-to-insert',
  templateUrl: './card-to-insert.component.html',
  styleUrls: ['./card-to-insert.component.scss'],
})
export class CardToInsertComponent implements IAddCmp {
  @Input() data: any;
}
