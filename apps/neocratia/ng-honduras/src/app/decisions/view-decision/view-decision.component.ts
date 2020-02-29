import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'neocratia-view-decision',
  templateUrl: './view-decision.component.html',
  styleUrls: ['./view-decision.component.scss']
})
export class ViewDecisionComponent implements OnInit {
  params$: Observable<any>;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.params$ = this.activatedRoute.params;
  }
}
