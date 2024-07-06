import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Importa las funcionalidades de autenticación de compatibilidad

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async register(email: string, password: string): Promise<firebase.User | null> {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result.user;
    } catch (error) {
      console.error("Error during registration:", error);
      return null;
    }
  }

  async login(email: string, password: string): Promise<firebase.User | null> {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result.user;
    } catch (error) {
      console.error("Error during login:", error);
      return null;
    }
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
