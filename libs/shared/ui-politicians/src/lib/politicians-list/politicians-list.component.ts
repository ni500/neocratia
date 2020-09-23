import { Component, OnInit, Input } from '@angular/core';
import { Politician } from '@neocratia/shared/data-politicians';

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
