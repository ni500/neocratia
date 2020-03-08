import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'neocratia-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title: string;
  @Input() country: string;
  @Output() sidenavToggle = new EventEmitter();
  @Input() user: any;
  @Output() logInUser = new EventEmitter();
  @Output() logOutUser = new EventEmitter();
  @Output() toggleMenu = new EventEmitter();
}
