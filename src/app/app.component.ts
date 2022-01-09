import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Componentes } from 'src/assets/interfaces/interfaces';
import { Observable } from 'rxjs/internal/Observable';

interface Menu{
  direccion: string;
  nombre: string;
  icono: any;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menu: Menu[]= [
    {
      direccion: '',
      nombre: 'Home',
      icono: 'home-outline',
    },
    {
      direccion: '',
      nombre: 'Sculptures',
      icono: 'body-outline',
    },
    {
      direccion: '',
      nombre: 'Paintings',
      icono: 'brush-outline',
    },
    {
      direccion: '',
      nombre: 'Top Artists',
      icono: 'trophy-outline',
    },
    {
      direccion: '',
      nombre: 'How to Art?',
      icono: 'help-circle-outline',
    },
  ]
  
  constructor(private dataService: DataService) {}

  componentes: Observable<Componentes[]>;

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }
}

