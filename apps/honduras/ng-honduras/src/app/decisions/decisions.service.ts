import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Decision } from './decision.model';

@Injectable({
  providedIn: 'root'
})
export class DecisionsService {
  constructor(private afs: AngularFirestore) {}

  getAllDecisions(): Observable<Decision[] | unknown[]> {
    return this.afs.collection('decisions').valueChanges();
  }
  createDecision(newDecision: Decision): void {
    const id = this.afs.createId();
    newDecision = { ...newDecision, id };
    this.afs
      .collection('decisions')
      .doc(id)
      .set(newDecision);
  }
}
