import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.page.html',
  styleUrls: ['./articulo.page.scss'],
})
export class ArticuloPage implements OnInit {

  constructor( private _location : Location) { }

  ngOnInit() {
  }
  onClickBack(){
    this._location.back();


  }
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay:true,
  }
}

