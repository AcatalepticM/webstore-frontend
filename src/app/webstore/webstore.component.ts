import {Component, OnInit, ViewChild} from '@angular/core';
import {OrdersComponent} from './orders/orders.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ProductsComponent} from './products/products.component';

@Component({
  selector: 'app-webstore',
  templateUrl: './webstore.component.html',
  styleUrls: ['./webstore.component.css']
})
export class WebstoreComponent {
  orderFinished = false;

  @ViewChild('productsC', {static: false})
  productsC: ProductsComponent;

  @ViewChild('shoppingCartC', {static: false})
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('ordersC', {static: false})
  ordersC: OrdersComponent;

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.paid = false;
  }
}
