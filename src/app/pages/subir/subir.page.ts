import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subir',
  templateUrl: './subir.page.html',
  styleUrls: ['./subir.page.scss'],
})
export class SubirPage implements OnInit {

  constructor(private route: Router,) { }
  onClickHome() {
    this.route.navigate(['/home']);
  }
  ngOnInit() {
  }

}
