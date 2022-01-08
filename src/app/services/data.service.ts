import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componentes } from 'src/assets/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getMenuOptions() {
    return this.http.get<Componentes[]>('/assets/data/menu-options.json');

  }
}
