import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Componentes } from 'src/assets/interfaces/interfaces';
import { Observable } from 'rxjs/internal/Observable';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private dataService: DataService, private route: Router) { }

  componentes: Observable<Componentes[]>;

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

}

