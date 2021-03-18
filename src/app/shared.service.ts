import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:54603/api";
  readonly PhotoURL = "http://localhost:54603/Photos";
  formData: PaymentDetail = new PaymentDetail();

  refreshAnotherFunction = new EventEmitter();    
  //subsVar: Subscription;   

  constructor(private http:HttpClient) { }

  getPaymentList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Payment');
  }

  postFormData(){
    return this.http.post(this.APIUrl+'/Payment',this.formData);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Payment/SaveFile',val);
  }

  updatePayment(){
    return this.http.put(this.APIUrl+'/Payment',this.formData);
  }

  deletePayment(id:number){
    return this.http.delete(this.APIUrl+'/Payment/'+id);
  }
  getPaymentByID(id:number):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Payment/getPaymentByID?id='+id);
  }

  onFirstComponentButtonClick() {    
    this.refreshAnotherFunction.emit();    
  } 
}
