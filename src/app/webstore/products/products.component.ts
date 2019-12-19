import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {Subscription} from 'rxjs';
import {ProductOrders} from '../models/product-orders.model';
import {ProductOrder} from '../models/product-order.model';
import {WebstoreService} from '../services/WebstoreService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productOrders: ProductOrder[] = [];
  products: Product[] = [];
  selectedProductOrder: ProductOrder;
  private shoppingCartOrders: ProductOrders;
  sub: Subscription;
  productSelected: boolean = false;

  constructor(private webstoreService: WebstoreService) {
  }

  ngOnInit() {
    this.productOrders = [];
    this.loadProducts();
    this.loadOrders();
  }

  addToCart(order: ProductOrder) {
    this.webstoreService.SelectedProductOrder = order;
    this.selectedProductOrder = this.webstoreService.SelectedProductOrder;
    this.productSelected = true;
  }

  removeFromCart(productOrder: ProductOrder) {
    let index = this.getProductIndex(productOrder.product);
    if (index > -1) {
      this.shoppingCartOrders.productOrders.splice(
        this.getProductIndex(productOrder.product), 1);
    }
    this.webstoreService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.webstoreService.ProductOrders;
    this.productSelected = false;
  }

  getProductIndex(product: Product): number {
    return this.webstoreService.ProductOrders.productOrders.findIndex(
      value => value.product === product);
  }

  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
  }

  loadProducts() {
    this.webstoreService.getAllProducts()
      .subscribe(
        (products: any[]) => {
          this.products = products;
          this.products.forEach(product => {
            this.productOrders.push(new ProductOrder(product, 0));
          });
        },
        (error) => console.log(error)
      );
  }

  loadOrders() {
    this.sub = this.webstoreService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.webstoreService.ProductOrders;
    });
  }

  reset() {
    this.productOrders = [];
    this.loadProducts();
    this.webstoreService.ProductOrders.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
  }
}
