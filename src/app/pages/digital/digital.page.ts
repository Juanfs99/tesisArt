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
      direccion: '/sculptures',
     nombre: 'MantaRaya',
     imagen: 'assets/cuadrado.jpeg',
     precio: '3000'
    },
    {
     direccion: '/paintings',
    nombre: 'VidaSolar',
    imagen: 'assets/cuadrado.jpeg',
    precio: '3000'
    
   },{
     direccion: '/others',
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
