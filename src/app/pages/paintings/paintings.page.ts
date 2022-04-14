import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarService } from './../../services/avatar.service';

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

  obras = [];

  constructor(private route: Router,
    private avService: AvatarService) {
    this.avService.getObras().subscribe((data) => {
      this.obras = data;

    });
  }

  ngOnInit() {
  }
  onClickHome() {
    this.route.navigate(['/home']);
  }
}
