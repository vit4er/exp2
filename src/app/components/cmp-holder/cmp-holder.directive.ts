import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCmpHolder]'
})
export class CmpHolderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
