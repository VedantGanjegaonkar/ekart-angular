import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component'; 
import { SearchComponent } from './container/search/search.component';
import { FormsModule, NgModel } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductComponent } from './container/product-list/product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    FilterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
