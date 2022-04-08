import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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

  sculptures: Sculptures[] = [
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
      precio: '3000',
    }, {
      direccion: '/articulo',
      nombre: 'SaltoAlto',
      imagen: 'assets/cuadrado.jpeg',
      precio: '3000'
    },
  ];

  notes = [




  ];
  constructor(private route: Router, private dataService: DataService) {
    this.dataService.getNotes().subscribe(res => {
      this.notes = res;
    });
  }

  ngOnInit() {
  }
  onClickHome() {
    this.route.navigate(['/home']);
  }

}
