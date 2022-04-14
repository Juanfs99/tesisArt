import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarService } from './../../services/avatar.service';


interface Digital {
  direccion: string;
  nombre: string;
  imagen: any;
  precio: any;
}
@Component({
  selector: 'app-digital',
  templateUrl: './digital.page.html',
  styleUrls: ['./digital.page.scss'],
})
export class DigitalPage implements OnInit {

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
