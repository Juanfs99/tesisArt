import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AvatarService } from '../../services/avatar.service';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subir',
  templateUrl: './subir.page.html',
  styleUrls: ['./subir.page.scss'],
})
export class SubirPage implements OnInit {

  obras: FormGroup;

  constructor(private route: Router,
    private loadingController: LoadingController,
    private avatarService: AvatarService,
    private dataService: DataService,
    private fb: FormBuilder,
    private alertController: AlertController,


  ) { }
  onClickHome() {
    this.route.navigate(['/home']);
  }

  async crearObra() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.dataService.addObra(this.obras.value)
      .then(async (obras) => {
        if (obras) {
          loading.dismiss();
          this.showAlert('Obra Registrada', 'Esta obra entrará en revisión');
          this.route.navigate(['/myArt']);
        } else {
          loading.dismiss();
          this.showAlert('Fallo de registro', 'Por favor, intente de nuevo');
        }
      });

  }
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  get nombre() {
    return this.obras.get('nombre');
  }
  get material() {
    return this.obras.get('material');
  }
  get concepto() {
    return this.obras.get('concepto');
  }
  get dimensiones() {
    return this.obras.get('dimensiones');
  }

  get precio() {
    return this.obras.get('precio');
  }

  get modeloObra() {
    return this.obras.get('modeloObra');
  }
  ngOnInit() {
    this.obras = this.fb.group({
      nombre: ['', [Validators.required]],
      concepto: ['', [Validators.required]],

      material: ['', [Validators.required]],
      dimensiones: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      modeloObra: ['', [Validators.required]],

    });
  }
}
