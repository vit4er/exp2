import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TabViewModule} from "primeng/tabview";
import {CmpHolderComponent} from "./components/cmp-holder/cmp-holder.component";
import {CmpHolderDirective} from "./components/cmp-holder/cmp-holder.directive";
import { CardToInsertComponent } from './components/card-to-insert/card-to-insert.component';

@NgModule({
  declarations: [AppComponent, CmpHolderComponent, CmpHolderDirective, CardToInsertComponent],
  imports: [BrowserModule, TabViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
