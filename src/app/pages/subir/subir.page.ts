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
  obra = {
    nombre: '',
    uid: '',
    userUid: '',
  };
  credentials: FormGroup;

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


    const obras = await this.dataService.addObra(this.credentials.value)
      .then(async () => {
        const uid = await this.dataService.getUid();
        this.obra.userUid = uid;
        return await this.dataService.addObra(this.obra);
      });
    if (obras) {
      loading.dismiss();
      this.showAlert('Obra Registrada', 'Esta obra entrará en revisión');
    } else {
      loading.dismiss();
      this.showAlert('Fallo de registro', 'Por favor, intente de nuevo');
    }
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
    return this.credentials.get('nombre');
  }
  ngOnInit() {
    this.credentials = this.fb.group({
      nombre: ['', [Validators.required, Validators.email]],
    });
  }
}
