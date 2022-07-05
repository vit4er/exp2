import { Injectable } from '@angular/core';
import { Dynamo } from '../common/dynamo';

import { FlexTabComponent } from '../flex-tab/flex-tab.component';

@Injectable({
  providedIn: 'root',
})
export class TransformService {
  constructor() {}

  mapCardToCmpItem(): Dynamo {
    return new Dynamo(FlexTabComponent, {
      label: 'Button',
    });
  }
}
