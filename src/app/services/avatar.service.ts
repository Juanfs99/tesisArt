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
export interface Obras {
  nombre: string;
}
export interface User {
  uid: string;
  email: string;
  apellido: string;
  cedula: string;
  displayName: string;
  nombre: string;
  telefono: string;
  password: string;
  country: string;
  frase: string;
  user: 'artist';
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
