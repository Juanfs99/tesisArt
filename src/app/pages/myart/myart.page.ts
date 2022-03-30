import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarService } from '../../services/avatar.service';

interface MyArt {
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
  digital: MyArt[] = [
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
  ];
  constructor(private route: Router,
    private avService: AvatarService) {

  }

  async ngOnInit() {
    const obras = await this.avService.getObrasUsers();
    console.log(obras);


  }
  onClickHome() {
    this.route.navigate(['/home']);
  }
}
