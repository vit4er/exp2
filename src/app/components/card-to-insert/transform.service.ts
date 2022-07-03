import { Injectable, } from '@angular/core';
import { CmpItem } from '../cmp-holder/cmp-item';
import { CardToInsertComponent } from './card-to-insert.component';

@Injectable({
  providedIn: 'root',
})
export class TransformService {
  constructor() {}

  mapCardToCmpItem(): CmpItem {
    return new CmpItem(CardToInsertComponent, {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec sem in orci consectetur porta. Donec in vestibulum odio. Mauris varius purus arcu, eget finibus ligula pellentesque ut. Vivamus sed tortor et nulla fermentum ultricies. Maecenas volutpat malesuada quam vel elementum.',
    });
  }
}
