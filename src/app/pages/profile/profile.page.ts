import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { AvatarService } from '../../services/avatar.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile = null;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(private route: Router,
    private avatarService: AvatarService,
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController) {
    this.avatarService.getUserProfile().subscribe((data) => {
      this.profile = data;
    });
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

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      width: 100,
      height: 100,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos, // Camera, Photos or Prompt!
    });

    if (image) {
      const loading = await this.loadingController.create();
      await loading.present();

      const result = await this.avatarService.uploadImage(image);
      loading.dismiss();

      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload failed',
          message: 'There was a problem uploading your avatar.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }
  ngOnInit() {
  }
  onClickMyArt() {
    this.route.navigate(['/myart']);
  }
  async sendCroppedImg() {
    //const image = this.croppedImage;

    const image = this.croppedImage;

    if (image) {
      const loading = await this.loadingController.create();
      await loading.present();

      const result = await this.avatarService.uploadImageCropped(image);
      loading.dismiss();

      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload failed',
          message: 'There was a problem uploading your avatar.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }


}
