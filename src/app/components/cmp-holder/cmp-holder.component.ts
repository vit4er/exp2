import {Component, ComponentRef, OnInit, ViewChild} from '@angular/core';
import {CmpHolderDirective} from './cmp-holder.directive';
import {CmpItem} from './cmp-item';
import {TransformService} from '../card-to-insert/transform.service';
import {TabView} from "primeng/tabview";

@Component({
  selector: 'app-cmp-holder',
  templateUrl: './cmp-holder.component.html',
  styleUrls: ['./cmp-holder.component.scss'],
})
export class CmpHolderComponent implements OnInit {
  @ViewChild('flexTabsView') tabView!: TabView;
  @ViewChild(CmpHolderDirective, { static: true })
  appCmpHolder!: CmpHolderDirective;

  cmpItems: CmpItem[] = [];
  itemToInsert: ComponentRef<any> | undefined;

    constructor(private transformService: TransformService
              ) {}

  ngOnInit(): void {

  }


  loadComponent() {
    const viewContainerRef = this.appCmpHolder.viewContainerRef;
    const item = this.transformService.mapCardToCmpItem();
    //viewContainerRef.clear();
    this.itemToInsert = viewContainerRef.createComponent<CmpItem>(
      item.component
    );
    this.itemToInsert.instance.data = item.data;
    this.cmpItems.push(this.itemToInsert.instance);
  }

  addClick() {
    this.loadComponent();
  }

  deleteClick() {
    console.log(this.appCmpHolder.viewContainerRef.length);
    const last = this.appCmpHolder.viewContainerRef.length-1;
    this.appCmpHolder.viewContainerRef.remove(last);
    this.cmpItems.pop();
    console.log(this.cmpItems);
  }

}
