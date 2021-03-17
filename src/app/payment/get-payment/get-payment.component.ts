import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-get-payment',
  templateUrl: './get-payment.component.html',
  styleUrls: ['./get-payment.component.css']
})
export class GetPaymentComponent implements OnInit {

  constructor(private service:SharedService) { }
  FormData:any =[];

  form:any;

  ngOnInit(): void {
    this.refreshPaymentList();
      this.service.    
      refreshAnotherFunction.subscribe(() => {    
        this.refreshPaymentList();    
      });    
  }

  refreshPaymentList(){
    this.service.getPaymentList().subscribe( data=>{
        this.FormData = data;
    });
  }
  
  editClick(item:any){
    this.service.formData = item;
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePayment(id)
        .subscribe(
          res => {
            this.refreshPaymentList();
          },
          err => { console.log(err) }
        )
    }
  }

}
