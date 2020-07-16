import { Component, OnInit } from '@angular/core';
import { products } from '../mocks/index';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  our_products = products;
  activeTab: 0;
  categories: Set<String> = new Set();
  constructor() { }

  ngOnInit() {
    this.our_products.map((item)=> this.categories.add(item.categorie));
    
  }

}
