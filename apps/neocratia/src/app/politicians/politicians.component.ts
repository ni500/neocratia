import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.params$ = this.activatedRoute.paramMap.pipe(map(params => params));
  }


}
