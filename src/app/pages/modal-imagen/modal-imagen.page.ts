import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.page.html',
  styleUrls: ['./modal-imagen.page.scss'],
})
export class ModalImagenPage implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(
    private modalCtrl: ModalController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private avatarService: AvatarService,

  ) { }

  ngOnInit() {
  }
  dismissModal() {
    this.modalCtrl.dismiss();
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
  async sendCroppedImg() {
    //const image = this.croppedImage;

    const image = this.croppedImage;

    if (image) {
      const loading = await this.loadingController.create();
      await loading.present();
      const result = await this.avatarService.uploadImageCropped(image);
      loading.dismiss();
      this.dismissModal();
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
