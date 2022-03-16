import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface CrearUsuario {
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private firestore: Firestore,) { }

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
    if (user === null) {
      return null;
    } else {
      return user.uid;
    }
  }


  logout() {
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
