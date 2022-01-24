import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  onClickHome(){
    this.route.navigate(['/home']);
  }

}
