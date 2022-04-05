import { DataService, Obra } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AvatarService } from '../../services/avatar.service';


@Component({
  selector: 'app-myart',
  templateUrl: './myart.page.html',
  styleUrls: ['./myart.page.scss'],
})
export class MyartPage implements OnInit {
  misObras = [];
  value = this.misObras;
  constructor(private route: Router,
    private avService: AvatarService,
    private nav: NavController,
    private dataService: DataService) {

  }
  async ngOnInit() {
    const obras = await this.avService.getObrasUsers();
    console.log(obras);
    this.misObras = obras;

  }
  onClickHome() {
    this.route.navigate(['/home']);
  }
}
