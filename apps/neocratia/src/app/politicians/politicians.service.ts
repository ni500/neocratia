import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Politician } from './politician.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliticiansService {
  politicians$: Observable<Politician[] | unknown[]>;
  constructor() {}
}
