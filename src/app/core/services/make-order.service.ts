import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurchaseRequest } from '../models/purchaseRequest.model';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MakeOrderService {

  constructor(private http:HttpClient) { }

  makeRequest(request:PurchaseRequest){
    this.http.post("http://localhost:8080/fx",request,{responseType:'text'}).subscribe(response => {
      if (response) {
        console.log(response);
      }})
    console.log("request has been made")
  }

  getAllOrders():Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:8080/fx")

  }
}
