import { Observable } from 'rxjs';
import 'firebase/firestore'; // For IVY rendering
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Politician } from './politician.model';

@Injectable({
  providedIn: 'root'
})
export class PoliticiansService {
  constructor(private afs: AngularFirestore) {}

  getAllPoliticians(): Observable<Politician[] | unknown[]> {
    return this.afs.collection('politicians').valueChanges();
  }

  createNewPolitician(newPolitician: Politician): void {
    const id = this.afs.createId();
    newPolitician = { ...newPolitician, id };
    this.afs
      .collection('politicians')
      .doc(id)
      .set(newPolitician);
  }
}
