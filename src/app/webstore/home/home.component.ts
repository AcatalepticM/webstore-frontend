import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {WebstoreService} from '../services/WebstoreService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private products: Product[] = [];

  constructor(private webstoreService: WebstoreService) {
  }

  ngOnInit() {
    this.webstoreService.getAllProducts()
      .subscribe(
        (products: any[]) => {
          this.products = products;
        },
        (error) => console.log(error)
      );
  }

}
