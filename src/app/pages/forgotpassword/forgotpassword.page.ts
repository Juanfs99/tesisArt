import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  email: string;

  constructor(private route: Router, private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
  ) { }

  ngOnInit() {

  }

  onClickHome() {
    this.route.navigate(['/home']);
  }

  contrasena(email) {
    this.alertContra();
    this.route.navigateByUrl('/login', { replaceUrl: true });
    return this.authService.cambiarcontrasena(this.email);
  }
  async alertContra() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Email enviado',
      message: 'Se ha enviado un email para reestablecer tu contraseña',
      buttons: ['OK'],

    });
    await alert.present();
  }
}
