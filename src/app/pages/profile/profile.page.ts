import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { AvatarService } from '../../services/avatar.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ModalImagenPage } from '../modal-imagen/modal-imagen.page';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  usuario = {
    frase: '',
  };
  profile = null;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(private route: Router,
    private avatarService: AvatarService,
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private modalCtrl: ModalController,
  ) {
    this.avatarService.getUserProfile().subscribe((data) => {
      this.profile = data;
    });

  }
  getValue(val: any) {
    this.usuario.frase = val;

  }
  async updateFrase() {
    const fraseUsuario = this.usuario.frase;
    await this.avatarService.updateFrase(fraseUsuario);
  }
  async abrirModalImagen() {
    const modal = await this.modalCtrl.create({
      component: ModalImagenPage,
      cssClass: 'my-custom-modal-css'

    });
    await modal.present();

  }
  async logout() {
    await this.authService.logout();
    this.route.navigateByUrl('/home', { replaceUrl: true });
    this.showAlert('Sesión finalizada');

  }

  onClickHome() {
    this.route.navigate(['/home']);
  }
  async showAlert(header) {
    const alert = await this.alertController.create({
      header,
      buttons: ['OK'],
    });
    await alert.present();
  }

  actualizarFrase() {

  }


  ngOnInit() {
  }
  onClickMyArt() {
    this.route.navigate(['/myart']);
  }



}
