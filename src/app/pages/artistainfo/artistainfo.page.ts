import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

interface Sculptures {
  direccion: string;
  nombre: string;
  imagen: any;
  precio: any;
}
@Component({
  selector: 'app-artistainfo',
  templateUrl: './artistainfo.page.html',
  styleUrls: ['./artistainfo.page.scss'],
})
export class ArtistainfoPage implements OnInit {


  sculptures: Sculptures[]=[
    {
      direccion: '',
     nombre: 'MantaRaya',
     imagen: 'assets/cuadrado.jpeg',
     precio: '3000'
    },
    {
     direccion: '',
    nombre: 'VidaSolar',
    imagen: 'assets/cuadrado.jpeg',
    precio: '3000'
    
   },{
     direccion: '',
    nombre: 'SaltoAlto',
    imagen: 'assets/cuadrado.jpeg',
    precio: '3000'
   },
  ]

  constructor(private route: Router, private _location : Location) { }

  ngOnInit() {
  }

  onClickBack(){
    this._location.back();

  }
}
