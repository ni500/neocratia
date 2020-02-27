import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/Auth';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  constructor(private auth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.auth.authState.pipe(
      switchMap(fbUser => {
        if (fbUser)
          return this.afs
            .collection('users')
            .doc(fbUser.uid)
            .valueChanges();
        else return of(null);
      })
    );
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  signOut() {
    this.auth.signOut();
  }

  async oAuthLogin(provider) {
    const credential = await this.auth.signInWithPopup(provider);
    this.updateUserInfo(credential.user);
  }

  updateUserInfo(user) {
    const newUser = {
      name: user.displayName,
      email: user.email,
      id: user.uid
    };
    this.afs
      .collection('users')
      .doc(newUser.id)
      .set(newUser, { merge: true });
  }
}
