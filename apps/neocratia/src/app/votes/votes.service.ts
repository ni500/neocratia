import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Politician } from '../politicians/politician.model';
import { Decision } from '../decisions/decision.model';
import { Vote } from './vote.model';

@Injectable({
  providedIn: 'root'
})
export class VotesService {
  politicians$: Observable<Politician[] | unknown>;
  decisions$: Observable<Decision[] | unknown>;
  constructor(private afs: AngularFirestore) {
    this.decisions$ = this.afs.collection('decisions').valueChanges();
    this.politicians$ = this.afs.collection('politicians').valueChanges();
  }

  setVote(newVote: Vote) {
    this.afs
      .collection('votes')
      .doc(`${newVote.politicianId}_${newVote.decisionId}`)
      .set(newVote, { merge: true });
  }
}
