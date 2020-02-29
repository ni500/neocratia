import { PoliticiansService } from './politicians.service';
import { Politician } from './politician.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'neocratia-politicians',
  templateUrl: './politicians.component.html',
  styleUrls: ['./politicians.component.scss']
})
export class PoliticiansComponent implements OnInit {
  newPolitician: Politician;
  politicians$ = this.politiciansService.getAllPoliticians();
  constructor(private readonly politiciansService: PoliticiansService) {}

  ngOnInit(): void {}

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
