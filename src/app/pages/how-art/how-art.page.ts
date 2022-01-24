import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-art',
  templateUrl: './how-art.page.html',
  styleUrls: ['./how-art.page.scss'],
})
export class HowArtPage implements OnInit {

  
  constructor(private route: Router) { }

  ngOnInit() {
  }
  onClickHome(){
    this.route.navigate(['/home']);
  }

}
