import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = []
  total = 0
  products: Product[] = [
    {
      id: '1',
      name: 'Producto 1',
      image: './assets/images/my-image.jpg',
      price: 100
    },
    {
      id: '2',
      name: 'Producto 2',
      image: './assets/images/my-image.jpg',
      price: 100
    },
    {
      id: '3',
      name: 'Producto 3',
      image: './assets/images/my-image.jpg',
      price: 100
    },
    {
      id: '4',
      name: 'Producto 4',
      image: './assets/images/my-image.jpg',
      price: 100
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product){
    console.log('product => ', product)
    this.myShoppingCart.push(product)
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0 )
  }

}
