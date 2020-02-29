import { AuthService } from './../../core/auth.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'neocratia-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title: string;
  @Input() country: string;
  @Input() user: any;
  @Output() logInUser = new EventEmitter();
  @Output() logOutUser = new EventEmitter();
  @Output() toggleMenu = new EventEmitter();
}
