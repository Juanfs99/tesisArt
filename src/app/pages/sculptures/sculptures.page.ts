import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Sculptures {
  direccion: string;
  nombre: string;
  imagen: any;
  precio: any;
}
@Component({
  selector: 'app-sculptures',
  templateUrl: './sculptures.page.html',
  styleUrls: ['./sculptures.page.scss'],
})
export class SculpturesPage implements OnInit {

  sculptures: Sculptures[]=[
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

  constructor(private route: Router) { }

  ngOnInit() {
  }
  onClickHome(){
    this.route.navigate(['/home']);
  }

}
