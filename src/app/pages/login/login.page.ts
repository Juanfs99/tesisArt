import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(private route: Router,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
  ) { }


  onClickHome() {
    this.route.navigate(['/home']);
  }

  onClickPassword() {
    this.route.navigate(['/forgotpassword']);
  }
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();
    if (user) {
      this.route.navigateByUrl('/profile', { replaceUrl: true });
    } else {
      this.showAlert('Fallo de inicio de sesión', 'Por favor, intente de nuevo');
    }

  }
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  onClickSignUp() {
    this.route.navigate(['/signup']);

  }
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
