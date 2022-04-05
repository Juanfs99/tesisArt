import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalpor-obra',
  templateUrl: './modalpor-obra.page.html',
  styleUrls: ['./modalpor-obra.page.scss'],
})
export class ModalporObraPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,

  ) { }

  ngOnInit() {
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
