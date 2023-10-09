import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";
import {StoreService} from "../../services/store.service";

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

  constructor(
    private storeService: StoreService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart()
  }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product){
    console.log('product => ', product)
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal()
  }
}
