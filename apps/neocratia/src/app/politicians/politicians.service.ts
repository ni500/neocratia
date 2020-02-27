import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Politician } from './politician.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliticiansService {
  politicians$: Observable<Politician[] | unknown[]>;
  constructor(private afs: AngularFirestore) {
    this.politicians$ = this.afs.collection('politicians').valueChanges();
  }

  createPolitician(newPolitician: Politician) {
    this.afs
      .collection('politicians')
      .doc(newPolitician.id)
      .set(newPolitician, { merge: true });
  }
}
