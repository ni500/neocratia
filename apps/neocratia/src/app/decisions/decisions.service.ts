import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Decision } from './decision.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecisionsService {
  decisions$: Observable<Decision[] | unknown[]>;
  constructor(private afs: AngularFirestore) {
    this.decisions$ = this.afs.collection('decisions').valueChanges();
  }

  createDecision(newDecision: Decision) {
    this.afs
      .collection('decisions')
      .doc(newDecision.id)
      .set(newDecision, { merge: true });
  }
}
