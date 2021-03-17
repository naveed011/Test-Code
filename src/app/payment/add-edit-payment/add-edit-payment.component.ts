import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {PaymentDetail} from 'src/app/payment-detail.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-edit-payment',
  templateUrl: './add-edit-payment.component.html',
  styleUrls: ['./add-edit-payment.component.css']
})
export class AddEditPaymentComponent implements OnInit {
  constructor(public service:SharedService) { }
  form_data = new PaymentDetail();

  

  ngOnInit(): void {
  }

  submitform(form: NgForm){

    if (this.service.formData.paymentDetailId == 0)
      this.insertRecord(form);
    else
      this.updatePayment(form);
      
  }

  updatePayment(form: NgForm){
    
    this.service.updatePayment().subscribe(res=>{
      this.resetForm(form);
      this.service.onFirstComponentButtonClick();
      // this.toastr.success('Submitted successfully', 'Payment Detail Register')
    });

  }

  insertRecord(form: NgForm){
    
    this.service.postFormData().subscribe(res=>{
      this.resetForm(form);
      this.service.onFirstComponentButtonClick();
    });

  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }

}

