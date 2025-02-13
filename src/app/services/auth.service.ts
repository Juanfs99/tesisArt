import { Injectable } from '@angular/core';
import {
  Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail,
  authState
} from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface CrearUsuario {
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private firestore: Firestore,) {

  }

  async register({ email, password }) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,


      );
      return user;
    } catch (e) {
      return null;
    }

  };
  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  };
  addUser(crearUsuario: CrearUsuario) {
    const usuario = doc(this.firestore, 'users/' + crearUsuario.uid);
    return setDoc(usuario, crearUsuario)
      .then(() => true)
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



  logout() {

    window.location.reload();
    return signOut(this.auth);
  }

  async cambiarcontrasena(email: string) {
    try {
      const user = await sendPasswordResetEmail(
        this.auth,
        email,
      );
      return user;
    } catch (e) {
      return null;
    }
  }

}
