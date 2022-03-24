import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AvatarService } from '../../services/avatar.service';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalSubirPage } from '../modal-subir/modal-subir.page';
@Component({
  selector: 'app-subir',
  templateUrl: './subir.page.html',
  styleUrls: ['./subir.page.scss'],
})
export class SubirPage implements OnInit {

  obras: FormGroup;

  constructor(private route: Router,

    private modalCtrl: ModalController,


  ) { }
  onClickHome() {
    this.route.navigate(['/home']);
  }


  async abrirModalSubir() {
    const modal = await this.modalCtrl.create({
      component: ModalSubirPage,
      cssClass: 'my-custom-modal-css'

    });
    await modal.present();

  }


  ngOnInit() {
    ;
  }
}
