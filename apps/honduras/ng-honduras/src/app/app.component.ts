import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'neocratia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'honduras-ng-honduras';
  user$: Observable<any>;
  login() {
    this.authService.googleLogin();
  }

  signOut() {
    this.authService.signOut();
  }

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }
}
