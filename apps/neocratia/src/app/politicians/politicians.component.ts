import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PoliticiansService } from './politicians.service';
import { Politician } from './politician.model';

interface PoliticianParams {
  params: { id: string };
}
@Component({
  selector: 'neocratia-politicians',
  templateUrl: './politicians.component.html',
  styleUrls: ['./politicians.component.scss']
})
export class PoliticiansComponent implements OnInit {
  params$: Observable<any>;
  politicians$: Observable<Politician[]>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private politiciansService: PoliticiansService
  ) {}

  ngOnInit(): void {
    this.params$ = this.activatedRoute.paramMap.pipe(map(params => params));
    this.politicians$ = this.politiciansService.politicians$ as Observable<
      Politician[]
    >;
  }
  createPolitician() {
    const newPolitician = {
      id: new Date().getTime().toString(),
      info: { name: 'Nombre 1', email: 'email@politico.com' }
    };
    console.log(newPolitician);
  }
}
