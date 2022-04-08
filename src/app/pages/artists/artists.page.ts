import { AvatarService } from './../../services/avatar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Artistas {
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

  artistas = [];

  constructor(private route: Router,
    private avService: AvatarService) {
    this.avService.getUsers().subscribe(res => {
      this.artistas = res;

    });
  }

  ngOnInit() {
  }
  onClickHome() {
    this.route.navigate(['/home']);
  }

}
