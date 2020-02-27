import { DecisionsService } from './../decisions.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Decision } from '../decision.model';

@Component({
  selector: 'neocratia-decisions-list',
  templateUrl: './decisions-list.component.html',
  styleUrls: ['./decisions-list.component.scss']
})
export class DecisionsListComponent implements OnInit {
  decisions$: Observable<Decision[] | unknown>;
  constructor(private decisionsSevice: DecisionsService) {}

  ngOnInit(): void {
    this.decisions$ = this.decisionsSevice.decisions$;
  }
}
