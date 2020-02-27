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
  politicians$ = this.politiciansService.politicians$;
  politician$ = this.politiciansService.politician$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private politiciansService: PoliticiansService
  ) {}

  ngOnInit(): void {
    this.params$ = this.activatedRoute.paramMap.pipe(
      map((params: any) => {
        this.politiciansService.setPolitician(params.params.id);
        return params;
      })
    );
  }
  createPolitician(newPolitician: Politician) {
    this.politiciansService.createPolitician(newPolitician);
  }
}
