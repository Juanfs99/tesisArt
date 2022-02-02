import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  onClickHome() {
    this.route.navigate(['/home']);
  }

  onClickPassword() {
    this.route.navigate(['/forgot']);
  }
  login() {
    this.route.navigate(['/profile']);

  }
  onClickSignUp() {
    this.route.navigate(['/signup']);

  }
}
