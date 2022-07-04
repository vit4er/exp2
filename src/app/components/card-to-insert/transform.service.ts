import { Injectable, } from '@angular/core';
import { CmpItem } from '../cmp-holder/cmp-item';

import {FlexTabComponent} from "../flex-tab/flex-tab.component";

@Injectable({
  providedIn: 'root',
})
export class TransformService {
  constructor() {}

  mapCardToCmpItem(): CmpItem {
    return new CmpItem(FlexTabComponent, {
      label: "Button"
    });
  }
}
