import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { CmpHolderDirective } from './cmp-holder.directive';
import { TransformService } from '../card-to-insert/transform.service';
import { TabView } from 'primeng/tabview';
import { Dynamo } from '../common/dynamo';

@Component({
  selector: 'app-cmp-holder',
  templateUrl: './cmp-holder.component.html',
  styleUrls: ['./cmp-holder.component.scss'],
})
export class CmpHolderComponent implements OnInit {
  @ViewChild('flexTabsView') tabView!: TabView;
  @ViewChild(CmpHolderDirective, { static: true })
  appCmpHolder!: CmpHolderDirective;

  cmpItems: Dynamo[] = [];
  cmpToInsert: ComponentRef<any> | undefined;

  constructor(private transformService: TransformService) {}

  ngOnInit(): void {}

  loadComponent() {
    const viewContainerRef = this.appCmpHolder.viewContainerRef;
    const item = this.transformService.mapCardToCmpItem();
    //viewContainerRef.clear();
    this.cmpToInsert = viewContainerRef.createComponent<Dynamo>(item.component);
    this.cmpToInsert.instance.data = item.data;
    this.cmpItems.push(this.cmpToInsert.instance);
  }

  addClick() {
    this.loadComponent();
  }

  deleteClick() {
    console.log(this.appCmpHolder.viewContainerRef.length);
    const last = this.appCmpHolder.viewContainerRef.length - 1;
    this.appCmpHolder.viewContainerRef.remove(last);
    this.cmpItems.pop();
    console.log(this.cmpItems);
  }
}
