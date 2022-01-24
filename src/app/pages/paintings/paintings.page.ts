import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Paintings {
  direccion: string;
  nombre: string;
  imagen: any;
  precio: any;
}

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.page.html',
  styleUrls: ['./paintings.page.scss'],
})
export class PaintingsPage implements OnInit {

  paintings: Paintings[]=[
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

  constructor(private route: Router) { }

  ngOnInit() {
  }
  onClickHome(){
    this.route.navigate(['/home']);
  }
}
