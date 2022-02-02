import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private route: Router) { }
  onClickHome() {
    this.route.navigate(['/home']);
  }
  ngOnInit() {
  }
  onClickLogin() {
    this.route.navigate(['/login']);
  }
}
