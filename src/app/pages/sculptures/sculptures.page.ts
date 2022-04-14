import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AvatarService } from './../../services/avatar.service';


@Component({
  selector: 'app-sculptures',
  templateUrl: './sculptures.page.html',
  styleUrls: ['./sculptures.page.scss'],
})
export class SculpturesPage implements OnInit {

  obras = [];
  constructor(private route: Router,
    private dataService: DataService,
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
