import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { VotesService } from '../votes.service';
import { map } from 'rxjs/operators';
import { Decision } from '../../decisions/decision.model';
import { Politician } from '../../politicians/politician.model';

@Component({
  selector: 'neocratia-set-vote',
  templateUrl: './set-vote.component.html',
  styleUrls: ['./set-vote.component.scss']
})
export class SetVoteComponent implements OnInit {
  decisions: any;
  politicians: any;

  selectedDecision: Decision;
  selectedPolitician: Politician;
  vote: string;

  constructor(private votesServise: VotesService) {}

  ngOnInit(): void {
    combineLatest([
      this.votesServise.decisions$,
      this.votesServise.politicians$
    ])
      .pipe(
        map(([decisions, politicians]: any) => {
          this.decisions = decisions;
          this.politicians = politicians;
          return [decisions, politicians];
        })
      )
      .subscribe(data => console.log(data));
  }

  setVote() {
    const newVote = {
      politicianId: this.selectedPolitician.id,
      decisionId: this.selectedDecision.id,
      vote: this.vote
    };
    this.votesServise.setVote(newVote);
  }
}
