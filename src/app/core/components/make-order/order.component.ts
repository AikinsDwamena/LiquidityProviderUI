import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { MakeOrderService } from '../../services/make-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders!:Order[];

 constructor(private orderService:MakeOrderService){

 }
  ngOnInit(): void {
   this.orderService.getAllOrders().subscribe(
    {
      next:(data) => {
        this.orders = data;
        console.log(this. orders)
      }
    }
   )
    console.log(this.orders)
  }

}
