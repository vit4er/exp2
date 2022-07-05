import { Component, Input } from '@angular/core';
import { IDynamo } from '../common/idynamo';

@Component({
  selector: 'app-card-to-insert',
  templateUrl: './card-to-insert.component.html',
  styleUrls: ['./card-to-insert.component.scss'],
})
export class CardToInsertComponent implements IDynamo {
  @Input() data: any;
}
