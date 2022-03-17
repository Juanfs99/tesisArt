import { ScreensizeService } from './services/screensize.service';
import { Component, HostListener } from '@angular/core';
import { DataService } from './services/data.service';
import { Componentes } from 'src/assets/interfaces/interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './services/auth.service';

import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import {
  Auth, signOut,
  authState
} from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  login: boolean;
  isDesktop: boolean;
  componentes: Observable<Componentes[]>;


  constructor(private dataService: DataService, private route: Router,
    private screensizeService: ScreensizeService,
    private platform: Platform,
    private auth: AuthService,
    private authFire: Auth,
  ) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      console.log('IsDesktop changed', isDesktop);
      this.isDesktop = isDesktop;
    });

    authState(this.authFire).subscribe((response) => {
      if (response) {
        console.log('esta logeado');
        this.login = true;
      } else {
        console.log('no esta loguead');
        this.login = false;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.screensizeService.onResize(event.target.innerWidth);
  };
  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
    this.screensizeService.onResize(this.platform.width());
  }
  onClickMyArt() {
    this.route.navigate(['/myart']);
  }



}

