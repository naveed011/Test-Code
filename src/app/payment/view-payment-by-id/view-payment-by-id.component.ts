import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-view-payment-by-id',
  templateUrl: './view-payment-by-id.component.html',
  styleUrls: ['./view-payment-by-id.component.css']
})
export class ViewPaymentByIdComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service:SharedService,
    private router: Router) { }

    paymentid:number = 0;
    PaymentByID:any =[];
  ngOnInit(): void {
    this.getPaymentById_a();
  }

  getPaymentById_a(){

    this.route.params.subscribe(params => {
      this.paymentid = Number.parseInt(params['id']);
   });

   
    this.service.getPaymentByID(this.paymentid).subscribe( data=>{
        this.PaymentByID = data;
    });
  }


}
