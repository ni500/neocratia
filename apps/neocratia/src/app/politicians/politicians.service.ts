import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Politician } from './politician.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoliticiansService {
  politicians$: Observable<Politician[] | unknown[]>;
  constructor(private afs: AngularFirestore) {
    this.politicians$ = this.afs.collection('politicians').valueChanges();
  }

  selectedPolitician = new BehaviorSubject('');
  selectedPoliticianId$ = this.selectedPolitician.asObservable();

  politician$ = this.selectedPoliticianId$.pipe(
    switchMap((id: string) => {
      if (id > '')
        return this.afs
          .collection('politicians')
          .doc(id)
          .valueChanges();
    })
  );

  createPolitician(newPolitician: Politician) {
    this.afs
      .collection('politicians')
      .doc(newPolitician.id)
      .set(newPolitician, { merge: true });
  }

  setPolitician(politicianId: string) {
    this.selectedPolitician.next(politicianId);
  }
}
