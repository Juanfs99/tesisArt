import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface myArt {
  direccion: string;
  nombre: string;
  imagen: any;
  precio: any;
}
@Component({
  selector: 'app-myart',
  templateUrl: './myart.page.html',
  styleUrls: ['./myart.page.scss'],
})
export class MyartPage implements OnInit {
  digital: myArt[] = [
    {
      direccion: '/articulo',
      nombre: 'MantaRaya',
      imagen: 'assets/cuadrado.jpeg',
      precio: '3000'
    },
    {
      direccion: '/articulo',
      nombre: 'VidaSolar',
      imagen: 'assets/cuadrado.jpeg',
      precio: '3000'
    }, {
      direccion: '/articulo',
      nombre: 'SaltoAlto',
      imagen: 'assets/cuadrado.jpeg',
      precio: '3000'
    },
  ]
  constructor(private route: Router) { }

  ngOnInit() {
  }

}
