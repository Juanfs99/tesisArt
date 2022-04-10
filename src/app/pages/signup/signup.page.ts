import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  usuario = {
    email: '',
    password: '',
    name: '',
    uid: '',
    lastname: '',
    cedula: '',
    phonenumber: '',
    // eslint-disable-next-line max-len
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/art-in-augmented-reality.appspot.com/o/AppComponentes%2FImagenes%2Favatar-01.jpg?alt=media&token=505907d3-2ad4-4335-a3d3-a02f020de44b',
    country: '',
    puntos: '1',
  };
  credentials: FormGroup;

  constructor(private route: Router,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,) { }
  onClickHome() {
    this.route.navigate(['/home']);
  }

  onClickLogin() {
    this.route.navigate(['/login']);
  }
  async register() {
    const loading = await this.loadingController.create();
    await loading.present();


    const user = await this.authService.register(this.credentials.value)

      .then(async () => {
        const uid = await this.authService.getUid();
        this.usuario.uid = uid;
        return await this.authService.addUser(this.usuario);
      });
    await loading.dismiss();
    if (user) {
      this.showAlert('Usuario Registrado', 'Bienvenido a ART in Augmented Reality');
      window.location.reload();

      this.authService.logout();
      this.route.navigateByUrl('/login', { replaceUrl: true });



    } else {
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
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }
  get name() {
    return this.credentials.get('name');
  }
  get lastname() {
    return this.credentials.get('lastname');
  }
  get cedula() {
    return this.credentials.get('cedula');
  }
  get phonenumber() {
    return this.credentials.get('phonenumber');
  }
  get country() {
    return this.credentials.get('country');
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      country: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      phonenumber: ['', [Validators.required, Validators.minLength(7)]],

    });
  }

}
