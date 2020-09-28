import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth} from '@angular/fire/auth';
import { User } from 'firebase';
import { firts } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;

  constructor(public afAuth: AngularFireAuth) {}
  async login(gmail: string, password: string){
    const result = await this.afAuth.singInWithEmailAndPassword(
      gmail,
      password
    );
    return result;
  }
  
  async register(nombre: string, apellidos: string, gmail: string, password: string, confirpassword: string){
    const result = await this.afAuth.createUserWithEmailAndPassword(
      nombre,
      apellidos,
      gmail,
      password,
      confirpassword

    )
  }
  
  async logout(){
    await this.afAuth.signOut();
  }
  getCurrent(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
