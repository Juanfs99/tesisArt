import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AvatarService, Obras, Users } from './../../services/avatar.service';


@Component({
  selector: 'app-artistainfo',
  templateUrl: './artistainfo.page.html',
  styleUrls: ['./artistainfo.page.scss'],
})
export class ArtistainfoPage implements OnInit, OnDestroy {
  misObras = [];
  obra: Obras = null;
  user: Users = null;
  uid;
  id;
  sub;
  constructor(private route: Router,
    private _location: Location,
    private activatedroute: ActivatedRoute,
    private avService: AvatarService) { }

  async ngOnInit() {
    this.sub = this.activatedroute.paramMap.subscribe(params => {
      this.uid = params.get('uid');
    });
    this.avService.getUserById(this.uid).subscribe(res => {
      this.user = res;
    });

    const obras = await this.avService.getObrasUsers2(this.uid);
    this.misObras = obras;



  }

  onClickBack() {
    // eslint-disable-next-line no-underscore-dangle
    this._location.back();

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
