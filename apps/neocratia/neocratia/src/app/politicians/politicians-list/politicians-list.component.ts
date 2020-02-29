import { Component, OnInit, Input } from '@angular/core';
import { Politician } from '../politician.model';

@Component({
  selector: 'neocratia-politicians-list',
  templateUrl: './politicians-list.component.html',
  styleUrls: ['./politicians-list.component.scss']
})
export class PoliticiansListComponent implements OnInit {
  @Input() politicians: Politician[];
  constructor() {}

  ngOnInit(): void {}
}
