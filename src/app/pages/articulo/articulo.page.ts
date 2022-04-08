import { AvatarService, Obras, Users } from './../../services/avatar.service';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.page.html',
  styleUrls: ['./articulo.page.scss'],
})
export class ArticuloPage implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('modelViewer') modelViewer;
  obra: Obras = null;
  user: Users = null;
  uid;
  id;
  sub;
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay:true,
  };
  constructor(private _location: Location,
    private activatedroute: ActivatedRoute,
    private _router: Router,
    private avService: AvatarService) { }

  ngOnInit() {
    this.sub = this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.uid = params.get('uid');
    });
    this.avService.getObraById(this.id).subscribe(res => {
      this.obra = res;
      this.uid = this.obra.uid;

    });

    this.avService.getUserById(this.uid).subscribe(res => {
      this.user = res;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  ngAfterViewInit() {
    const waitTimer = setInterval(() => {
      if (this.obra) {
        this.modelViewer.nativeElement.src = this.obra.modeloObraGLB;
        this.modelViewer.nativeElement['ios-src'] = this.obra.modeloObraUSDZ;
        clearInterval(waitTimer);
      }
    }, 100);
  }

  onClickBack() {
    // eslint-disable-next-line no-underscore-dangle
    this._location.back();
  }

}

