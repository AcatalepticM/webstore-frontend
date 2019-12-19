import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductOrders} from '../models/product-orders.model';
import {WebstoreService} from '../services/WebstoreService';
import {ProductOrder} from '../models/product-order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: ProductOrders;
  total: number;
  paid: boolean;
  sub: Subscription;

  constructor(private webstoreService: WebstoreService) {
    this.orders = this.webstoreService.ProductOrders;

  }

  ngOnInit() {
    this.total = 0;
    this.paid = false;
    this.sub = this.webstoreService.OrdersChanged.subscribe(() => {
      this.orders = this.webstoreService.ProductOrders;
      this.total = this.calculateTotal(this.orders.productOrders);
    });
  }

  private calculateTotal(products: ProductOrder[]): number {
    let sum = 0;
    products.forEach(value => {
      sum += (value.product.price * value.quantity);
    });
    return sum;
  }


  pay() {
    this.paid = true;
    this.webstoreService.saveOrder(this.orders).subscribe();
  }
}
