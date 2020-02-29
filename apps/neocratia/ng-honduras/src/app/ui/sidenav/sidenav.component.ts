import { Component, Input } from '@angular/core';

@Component({
  selector: 'neocratia-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() user: any;
}
