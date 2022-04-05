import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

import { Auth } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc, updateDoc, collection, collectionData } from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';

import { Photo } from '@capacitor/camera';

export interface Users {
  uid: any;
  email: any;
  lastname: any;
  cedula: any;
  displayName: any;
  name: any;
  phonenumber: any;
  password: any;
  country: any;
  frase: any;
  imageUrl: any;
  user: 'artist';
}
export interface Obras {
  id?: string;
  nombre: string;
  dimensiones: any;
  concepto: any;
  imagenObra: any;
  material: any;
  modeloObraGLB: any;
  modeloObraUSDZ: any;
  precio: any;
  uid: any;
}
@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private storage: Storage) { }


  getUserProfile() {
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return docData(userDocRef, { idField: 'id' });
  }
  async getObrasUsers() {
    const user = this.auth.currentUser;
    const userDocRef = collection(this.firestore, `obras`);
    const result = await new Promise<Array<any>>((resolve, reject) => {
      collectionData(userDocRef, { idField: 'id' }).subscribe(obras => {
        resolve(obras);
      },
        err => {
          console.log(err);
          reject(err);
        });
    });
    return result.filter(obra => obra.uid === user.uid);

  };

  getObraById(id): Observable<Obras> {
    const obraDocRef = doc(this.firestore, `obras/${id}`);
    return docData(obraDocRef, { idField: 'id' }) as Observable<Obras>;
  };
  getUserById(uid): Observable<Users> {
    const userDocRef = doc(this.firestore, `users/${uid}`);
    return docData(userDocRef, { idField: 'uid' }) as Observable<Users>;
  };

  async uploadImage(cameraFile: Photo) {
    const user = this.auth.currentUser;
    const path = `uploads/${user.uid}/profile.png`;
    const storageRef = ref(this.storage, path);

    try {
      await uploadString(storageRef, cameraFile.base64String, 'base64');

      const imageUrl = await getDownloadURL(storageRef);

      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await updateDoc(userDocRef, {
        imageUrl,
      });
      return true;
    } catch (e) {
      return null;
    }
  }


}
