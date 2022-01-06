import { Component, OnInit } from '@angular/core';

interface Categorias {
  direccion: string;
  nombre: string;
  imagen: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
 categorias: Categorias[]=[
   {
     direccion: '',
    nombre: 'Sculptures',
    imagen: 'assets/cuadrado.jpeg',
   },
   {
    direccion: '',
   nombre: 'Paintings',
   imagen: 'assets/cuadrado.jpeg',
   
  },{
    direccion: '',
   nombre: 'Others',
   imagen: 'assets/cuadrado.jpeg',

  },
 ]
  constructor( ) { }

  ngOnInit() {
  }

}
