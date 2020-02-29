import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'neocratia-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() user: any;
  constructor() {}

  ngOnInit(): void {}
}
