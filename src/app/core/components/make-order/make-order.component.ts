import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PurchaseRequest } from '../../models/purchaseRequest.model';
import { MakeOrderService } from '../../services/make-order.service';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.scss']
})
export class MakeOrderComponent implements OnInit{
  makeOrderForm!:FormGroup;
  @Input() currentProvider:string ="FXCM";
  currencies:string[] = ['NAIRA','CEDI','CEFA','DOLLAR','EURO','POUNDS']

  constructor(private makeOrderService:MakeOrderService){}

  ngOnInit(): void {
    //assign a providers currencies to it 
    //it should be caps

    this.makeOrderForm = new FormGroup({
      "currency":new FormControl("NAIRA"),
      "amountBeingPurchased":new FormControl(0.0,Validators.required),
      "requestTime": new FormControl(null),
      "status":new FormControl("PENDING"),
      "bankAccountNo": new FormControl("",Validators.required)

    });

   
  }

  onSubmit(){
    console.log(this.makeOrderForm)
    const request:PurchaseRequest = new PurchaseRequest(this.currentProvider,
      this.makeOrderForm.value.currency,
      this.makeOrderForm.value.amountBeingPurchased,
      this.makeOrderForm.value.status,
      this.makeOrderForm.value.bankAccountNo,
      new Date()

    )

    console.log(request)

    this.makeOrderService.makeRequest(request);
  }


  // providerName,
    // currency,
      // amountBeingPurchased, 
      //  requestTime, 
      //  status,
      //  bankAccountNo



}
