import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Artistas{
  direccion: string;
  nombre: string;
  imagen: any;
}

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {

  artistas: Artistas[]=[
    {
      direccion: '/artistainfo',
      nombre: 'Roberto',
      imagen: 'assets/cuadrado.jpeg',
     },
     {
       direccion: '/artistainfo',
       nombre: 'Ana',
       imagen: 'assets/cuadrado.jpeg',
      },
      {
       direccion: '/artistainfo',
       nombre: 'Juan',
       imagen: 'assets/cuadrado.jpeg',
      },
      {
       direccion: '/artistainfo',
       nombre: 'Patricia',
       imagen: 'assets/cuadrado.jpeg',
      }
  ]
  constructor(private route: Router) { }

  ngOnInit() {
  }
  onClickHome(){
    this.route.navigate(['/home']);
  }

}
