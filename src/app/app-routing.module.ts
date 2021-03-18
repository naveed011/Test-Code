import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaymentComponent} from './payment/payment.component';
import{ViewPaymentByIdComponent} from './payment/view-payment-by-id/view-payment-by-id.component';

const routes: Routes = [
  {path:'',component:PaymentComponent},
  {path:'paymentDetail/:id', component:ViewPaymentByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
