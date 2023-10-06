import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() image: String = ''
  imageDefault = 'https://images.unsplash.com/photo-1696247835082-2d6f7e528bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4140&q=80'
  @Output() loaded = new EventEmitter<String>()

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.image = this.imageDefault
  }

  imgLoaded(){
    console.log('Imagen cargada y se emitirá el evento al padre')
    this.loaded.emit(this.image)
  }
}
