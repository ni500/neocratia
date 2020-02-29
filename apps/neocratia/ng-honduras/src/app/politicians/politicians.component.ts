import { PoliticiansService } from './politicians.service';
import { Politician } from './politician.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'neocratia-politicians',
  templateUrl: './politicians.component.html',
  styleUrls: ['./politicians.component.scss']
})
export class PoliticiansComponent implements OnInit {
  params$: Observable<any>;
  newPolitician: Politician;
  politicians$ = this.politiciansService.getAllPoliticians();
  politician$ = this.politiciansService.politician$;
  constructor(
    private readonly politiciansService: PoliticiansService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.params$ = this.activatedRoute.paramMap.pipe(
      map((params: any) => {
        this.politiciansService.selectPolitician(params.params.id);
        return params;
      })
    );
  }

  createPolitician() {
    this.newPolitician = {
      city: 'San Pedro Sula',
      id: '',
      info: {
        name: 'Nicolás Contreras',
        email: 'n@ni500.com',
        resume: 'Es un gran político',
        yearsInCongress: 1
      },
      userId: ''
    };
    this.politiciansService.createNewPolitician(this.newPolitician);
  }
}
