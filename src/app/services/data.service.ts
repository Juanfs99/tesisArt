import { Observable } from 'rxjs/internal/Observable';
import { Firestore, addDoc, collection, doc, collectionData, docData, deleteDoc, updateDoc, setDoc } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componentes } from 'src/assets/interfaces/interfaces';
import { Auth, authState } from '@angular/fire/auth';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';

export interface Obra {
  id?: string;
  nombre: string;
  precio: string;
  dimensiones: string;
  concepto: string;
  material: string;
  modeloObraFBX: string;
  modeloObraGLB: string;
  modeloObraUSDZ: string;
  uid: string;
}
export interface Note {
  id?: string;
  title: string;
  text: string;
}
export interface CrearObra {
  nombre: string;
  concepto: string;
  material: string;
  dimensiones: string;
  precio: string;
  modeloObraFBX: any;
  modeloObraUSDZ: string;
  modeloObraGLB: string;
  fbx: any;
  uid: string;
  imagenObra: any;
  imagen: any;

}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private firestore: Firestore,
    private auth: Auth, private storage: Storage,
  ) { }

  async addObra(crearObra: CrearObra) {

    const user = this.auth.currentUser;
    const obra = collection(this.firestore, `obras/`);
    crearObra.uid = user.uid;
    const timeStamp = Math.floor(Date.now() / 1000);
    //IMAGEN//
    const uriImg = crearObra.imagenObra;
    const modeloImg = timeStamp + '_' + uriImg.replace(/.*[\/\\]/, '');
    crearObra.imagen = crearObra.imagen.split(',')[1];
    const rutaImg = `imagenesObras/${crearObra.uid}/${modeloImg}`;
    const storageRefImg = ref(this.storage, rutaImg);

    //MODELO//
    const uri = crearObra.modeloObraFBX;
    const modeloNombre = timeStamp + '_' + uri.replace(/.*[\/\\]/, '');
    crearObra.fbx = crearObra.fbx.split(',')[1];
    const ruta = `modelos/${crearObra.uid}/${modeloNombre}`;
    const storageRef = ref(this.storage, ruta);
    try {
      await uploadString(storageRef, crearObra.fbx, 'base64');
      const modeloUrl = await getDownloadURL(storageRef);
      crearObra.modeloObraFBX = modeloUrl;
      delete crearObra.fbx;

      await uploadString(storageRefImg, crearObra.imagen, 'base64');
      const imagenUrl = await getDownloadURL(storageRefImg);
      crearObra.imagenObra = imagenUrl;
      delete crearObra.imagen;
    } catch (error) { };

    return addDoc(obra, crearObra)
      .then((data) => {
        console.log(data);
        return true;
      })
      .catch(error => {
        console.log(error);
        return false;
      });

  }
  async getUid() {
    const user = await this.auth.currentUser;
    if (user) {
      return user.uid;
    } else {
      return null;
    }
  }

  async uploadModel(modelFile: any) {
    const user = this.auth.currentUser;

  }



  getMenuOptions() {
    return this.http.get<Componentes[]>('/assets/data/menu-options.json');

  }

  getNotes(): Observable<Note[]> {
    const notesRef = collection(this.firestore, 'notes');
    return collectionData(notesRef, { idField: 'id' }) as Observable<Note[]>;
  }

  getNoteById(id): Observable<Note> {
    const noteDocRef = doc(this.firestore, `notes/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<Note>;
  }

  addNote(note: Note) {
    const notesRef = collection(this.firestore, 'notes');
    return addDoc(notesRef, note);
  }
  deleteNote(note: Note) {
    const noteDocRef = doc(this.firestore, 'notes/${notes.id}');
    return deleteDoc(noteDocRef);
  }
  updateNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return updateDoc(noteDocRef, { title: note.title, text: note.text });
  }
}
