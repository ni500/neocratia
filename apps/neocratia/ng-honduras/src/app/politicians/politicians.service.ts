import { Observable, BehaviorSubject } from 'rxjs';
import 'firebase/firestore'; // For IVY rendering
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Politician } from './politician.model';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoliticiansService {
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

  selectPolitician(politicianId: string) {
    this.selectedPolitician.next(politicianId);
  }
}
