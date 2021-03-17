import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GetPaymentComponent } from './payment/get-payment/get-payment.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddEditPaymentComponent } from './payment/add-edit-payment/add-edit-payment.component';




@NgModule({
  declarations: [
    AppComponent,
    GetPaymentComponent,
    AddEditPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
