import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.page.html',
  styleUrls: ['./articulo.page.scss'],
})
export class ArticuloPage implements OnInit {
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay:true,
  };
  constructor(private _location: Location) { }

  ngOnInit() {
  }
  onClickBack() {
    // eslint-disable-next-line no-underscore-dangle
    this._location.back();


  }

}

