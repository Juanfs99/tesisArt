import { ScreensizeService } from './../../services/screensize.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Categorias {
  direccion: string;
  nombre: string;
  imagen: any;
}
interface Artistas {
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


  categorias: Categorias[] = [
    {
      direccion: '/sculptures',
      nombre: 'Sculptures',
      imagen: 'assets/cuadrado.jpeg',
    },
    {
      direccion: '/paintings',
      nombre: 'Paintings',
      imagen: 'assets/cuadrado.jpeg',

    }, {
      direccion: '/digital',
      nombre: 'Digital',
      imagen: 'assets/cuadrado.jpeg',

    },
  ];
  artistas: Artistas[] = [
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

  ];
  isDesktop: boolean;


  constructor(private screensizeService: ScreensizeService,
    private route: Router,) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      console.log('IsDesktop changed', isDesktop);
      this.isDesktop = isDesktop;
    });
  }
  onClickLogin() {
    this.route.navigate(['/login']);
  }
  ngOnInit() {
  }

}
