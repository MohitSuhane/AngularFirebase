import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase";

@Injectable()
export class AuthService {
  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => {
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password).then(
        (res) => {
          resolve(res);
        },
        (err) => reject(err)
      );
    });
  }

  doLogout() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signOut().then(
        (res) => {
          resolve(res);
        },
        (err) => reject(err)
      );
    });
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      this.afAuth.signInWithPopup(provider).then(
        (res) => {
          resolve(res);
        },
        (err) => reject(err)
      );
    });
  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.signInWithPopup(provider).then(
        (res) => {
          resolve(res);
        },
        (err) => reject(err)
      );
    });
  }
}
