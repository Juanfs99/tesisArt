import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-galeria',
  templateUrl: './modal-galeria.page.html',
  styleUrls: ['./modal-galeria.page.scss'],
})
export class ModalGaleriaPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
