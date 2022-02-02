import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Digital {
  direccion: string;
  nombre: string;
  imagen: any;
  precio: any;
}
@Component({
  selector: 'app-digital',
  templateUrl: './digital.page.html',
  styleUrls: ['./digital.page.scss'],
})
export class DigitalPage implements OnInit {

  digital: Digital[]=[
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
    
   },{
     direccion: '/articulo',
    nombre: 'SaltoAlto',
    imagen: 'assets/cuadrado.jpeg',
    precio: '3000'
   },
  ]
  constructor( private route: Router) { }

  ngOnInit() {
  }
  onClickHome(){
    this.route.navigate(['/home']);
  }
}
