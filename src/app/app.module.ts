import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";

import { ToggleDirective } from './toggle.directive';

const routes:Routes=[
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    CheckoutComponent,
    ToggleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
