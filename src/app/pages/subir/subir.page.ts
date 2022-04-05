import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AvatarService } from '../../services/avatar.service';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalSubirPage } from '../modal-subir/modal-subir.page';
import { ModalMensualPage } from '../modal-mensual/modal-mensual.page';
import { ModalporObraPage } from '../modalpor-obra/modalpor-obra.page';
import { ModalGaleriaPage } from '../modal-galeria/modal-galeria.page';

@Component({
  selector: 'app-subir',
  templateUrl: './subir.page.html',
  styleUrls: ['./subir.page.scss'],
})
export class SubirPage implements OnInit {

  puestos = 0;
  obras: FormGroup;

  constructor(private route: Router,

    private modalCtrl: ModalController,


  ) { }


  onClickHome() {
    this.route.navigate(['/home']);
  }
  addPunto() {
    this.puestos++;
  }

  async abrirModalSubir() {
    const modal = await this.modalCtrl.create({
      component: ModalSubirPage,
      cssClass: 'my-custom-modal-css'

    });
    await modal.present();

  }
  async abrirModalMensual() {
    const modal = await this.modalCtrl.create({
      component: ModalMensualPage,
      cssClass: 'my-custom-modal-css'

    });
    await modal.present();

  }
  async abrirModalObra() {
    const modal = await this.modalCtrl.create({
      component: ModalporObraPage,
      cssClass: 'my-custom-modal-css'

    });
    await modal.present();

  }
  async abrirModalGaleria() {
    const modal = await this.modalCtrl.create({
      component: ModalGaleriaPage,
      cssClass: 'my-custom-modal-css'

    });
    await modal.present();

  }


  ngOnInit() {
    ;
  }
}
