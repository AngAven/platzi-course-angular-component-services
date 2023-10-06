import {Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() image: String = ''
  imageDefault = 'https://images.unsplash.com/photo-1696247835082-2d6f7e528bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4140&q=80'
  @Output() loaded = new EventEmitter<String>()

  constructor() {
    // Aqui no van cosas asincronas
    // Esto solo pasa una vez
    console.log('- Constructor -')
    console.log('imgValue => ', this.image)
  }

  ngOnInit(): void {
    // Corre antes del render del componente
    // Podemos correr cosas asincronas
    // Corre una sola vez antes de que inicie el render
    console.log('- ngOnInit -')
    console.log('imgValue => ', this.image)
  }

  ngOnChanges(){
    // Corre antes del render del componente y durante
    // Actualiza los cambios en los inputs
    console.log('- ngOnChanges -')
    console.log('imgValue => ', this.image)
  }

  ngAfterViewInit(){
    // Corre despues del render
    // Aquí van los hijos por que los componentes ya deberían de estar renderizados
    console.log('- ngAfterViewInit -')
    console.log('imgValue => ', this.image)
  }

  ngOnDestroy(){
    //Cuando eliminamos el componente
    // Cuando el componente deja de existir
    console.log('- ngOnDestroy -')
  }

  imgError(){
    this.image = this.imageDefault
  }

  imgLoaded(){
    console.log('Imagen cargada y se emitirá el evento al padre')
    this.loaded.emit(this.image)
  }
}
