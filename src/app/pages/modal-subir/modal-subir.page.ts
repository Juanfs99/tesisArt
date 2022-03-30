import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AvatarService } from '../../services/avatar.service';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-subir',
  templateUrl: './modal-subir.page.html',
  styleUrls: ['./modal-subir.page.scss'],
})
export class ModalSubirPage implements OnInit {

  obras: FormGroup;

  constructor(private route: Router,
    private loadingController: LoadingController,
    private avatarService: AvatarService,
    private dataService: DataService,
    private fb: FormBuilder,
    private alertController: AlertController,
    private modalCtrl: ModalController,


  ) { }
  async crearObra() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.dataService.addObra(this.obras.value)
      .then(async (obras) => {
        if (obras) {
          loading.dismiss();
          this.showAlert('Obra Registrada', 'Esta obra entrará en revisión');
          this.dismissModal();

        } else {
          loading.dismiss();
          this.showAlert('Fallo de registro', 'Por favor, intente de nuevo');
          this.dismissModal();
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

  get modeloObraFBX() {
    return this.obras.get('modeloObraFBX');
  }
  get modeloObraUSDZ() {
    return this.obras.get('modeloObraUSDZ');
  }
  get modeloObraGLB() {
    return this.obras.get('modeloObraGLB');
  }
  get imagenObra() {
    return this.obras.get('imagenObra');
  }
  ngOnInit() {
    this.obras = this.fb.group({
      nombre: ['', [Validators.required]],
      concepto: ['', [Validators.required]],
      material: ['', [Validators.required]],
      dimensiones: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      modeloObraFBX: [null, [Validators.required]],
      modeloObraUSDZ: '',
      modeloObraGLB: '',
      fbx: null,
      imagenObra: [null, [Validators.required]],
      imagen: null,

    });
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  onFileChange(event) {

    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log('"hola"');

        this.obras.patchValue({
          fbx: reader.result
        });
      };
    }
  }
  onFileChangeImg(event) {

    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log('"img"');

        this.obras.patchValue({
          imagen: reader.result
        });
      };
    }
  }
}
