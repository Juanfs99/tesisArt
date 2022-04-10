import { AvatarService } from './../../services/avatar.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-mensual',
  templateUrl: './modal-mensual.page.html',
  styleUrls: ['./modal-mensual.page.scss'],
})
export class ModalMensualPage implements OnInit {
  profile = null;
  constructor(
    private modalCtrl: ModalController,
    private avatarService: AvatarService,
  ) {
    this.avatarService.getUserProfile().subscribe((data) => {
      this.profile = data;
    });
  }
  async updatePuntoMensual() {
    const puntos = 5;
    const puntosActuales = this.profile.puntos;
    const suma = puntos + puntosActuales;
    const puntosMensual = suma;
    await this.avatarService.updatePuntos(puntosMensual);
  }


  ngOnInit() {
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  contratar() {
    this.updatePuntoMensual();
    this.modalCtrl.dismiss();
  }
}
