import { Component } from '@angular/core';
import {Product} from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://images.unsplash.com/photo-1696321832425-a6871f33420f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3987&q=80/'

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

  loadedImg(img: String){
    console.log('El padre ya sabe que cargo la imagen => ', img)
  }
}
