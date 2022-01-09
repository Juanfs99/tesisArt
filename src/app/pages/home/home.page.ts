import { Component, OnInit } from '@angular/core';

interface Categorias {
  direccion: string;
  nombre: string;
  imagen: any;
}
interface Artistas{
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
     direccion: '/sculptures',
    nombre: 'Sculptures',
    imagen: 'assets/cuadrado.jpeg',
   },
   {
    direccion: '/paintings',
   nombre: 'Paintings',
   imagen: 'assets/cuadrado.jpeg',
   
  },{
    direccion: '/others',
   nombre: 'Others',
   imagen: 'assets/cuadrado.jpeg',

  },
 ]
 artistas: Artistas[]=[
   {
     direccion: '',
     nombre: 'Roberto',
     imagen: 'assets/cuadrado.jpeg',
    },
    {
      direccion: '',
      nombre: 'Ana',
      imagen: 'assets/cuadrado.jpeg',
     },
     {
      direccion: '',
      nombre: 'Juan',
      imagen: 'assets/cuadrado.jpeg',
     },
     {
      direccion: '',
      nombre: 'Patricia',
      imagen: 'assets/cuadrado.jpeg',
     }
 ]
  constructor( ) { }

  ngOnInit() {
  }

}
