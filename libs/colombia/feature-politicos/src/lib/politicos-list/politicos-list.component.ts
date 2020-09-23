import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neocratia-politicos-list',
  templateUrl: './politicos-list.component.html',
  styleUrls: ['./politicos-list.component.scss']
})
export class PoliticosListComponent implements OnInit {
  politicians = [
    {
      id: '1',
      info: { name: 'Nicolás Contreras', email: 'nicolas@pappcorn.com ' }
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
