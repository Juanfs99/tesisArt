import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-mensual',
  templateUrl: './modal-mensual.page.html',
  styleUrls: ['./modal-mensual.page.scss'],
})
export class ModalMensualPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,

  ) { }

  ngOnInit() {
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  contratar() {
    alert('contratado');

    this.modalCtrl.dismiss();
  }
}
