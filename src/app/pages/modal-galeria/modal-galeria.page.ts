import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AvatarService } from './../../services/avatar.service';

@Component({
  selector: 'app-modal-galeria',
  templateUrl: './modal-galeria.page.html',
  styleUrls: ['./modal-galeria.page.scss'],
})
export class ModalGaleriaPage implements OnInit {
  profile = null;

  constructor(
    private modalCtrl: ModalController,
    private avatarService: AvatarService,
  ) {
    this.avatarService.getUserProfile().subscribe((data) => {
      this.profile = data;
    });
  }

  async updatePuntoObra() {
    const puntos = 15;
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
    this.updatePuntoObra();
    this.modalCtrl.dismiss();
  }
}
