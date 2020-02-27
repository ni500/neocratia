import { VotesService } from './../votes.service';
import { Component, OnInit, Input } from '@angular/core';
import { Vote } from '../vote.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'neocratia-votes-list',
  templateUrl: './votes-list.component.html',
  styleUrls: ['./votes-list.component.scss']
})
export class VotesListComponent implements OnInit {
  @Input() politicianId: string;
  @Input() decisionId: string;

  politicianVotes$ = this.votesService.politiciansVotes$;

  constructor(private votesService: VotesService) {}

  ngOnInit(): void {
    if (this.politicianId) this.votesService.setPolitician(this.politicianId);
  }
}
