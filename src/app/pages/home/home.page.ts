import { ScreensizeService } from './../../services/screensize.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth, signOut,
  authState
} from '@angular/fire/auth';
import { AvatarService } from '../../services/avatar.service';

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

  artistas = [];

  categorias: Categorias[] = [
    {
      direccion: '/sculptures',
      nombre: 'Esculturas',
      // eslint-disable-next-line max-len
      imagen: 'https://firebasestorage.googleapis.com/v0/b/art-in-augmented-reality.appspot.com/o/AppComponentes%2FImagenes%2FsculptureCat.jpg?alt=media&token=f00b3792-a957-4214-8982-124b326cfe4d',
    },
    {
      direccion: '/paintings',
      nombre: 'Pinturas',
      // eslint-disable-next-line max-len
      imagen: 'https://firebasestorage.googleapis.com/v0/b/art-in-augmented-reality.appspot.com/o/AppComponentes%2FImagenes%2FpinturaCat.jpg?alt=media&token=21e1cd85-45ad-4ecb-83cc-53b2e67ee129',

    }, {
      direccion: '/digital',
      nombre: 'Digital',
      // eslint-disable-next-line max-len
      imagen: 'https://firebasestorage.googleapis.com/v0/b/art-in-augmented-reality.appspot.com/o/AppComponentes%2FImagenes%2FdigitalCat.jpg?alt=media&token=4777931b-79d6-4ab8-9075-8c9610ec3c48',

    },
  ];

  isDesktop: boolean;
  login: boolean;

  profile = null;

  constructor(private screensizeService: ScreensizeService,
    private route: Router,
    private authFire: Auth,
    private avatarService: AvatarService,) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      this.isDesktop = isDesktop;
    });
    authState(this.authFire).subscribe((response) => {
      if (response) {


        this.login = true;

        this.avatarService.getUserProfile().subscribe((data) => {
          this.profile = data;


        });


      } else {
        this.login = false;

      }
    });
    this.avatarService.getUsers().subscribe(res => {
      this.artistas = res;

    });
  }
  onClickLogin() {
    this.route.navigate(['/login']);
  }
  onClickProfile() {
    this.route.navigate(['/profile']);
  }
  ngOnInit() {
  }

}
