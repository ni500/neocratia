import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'neocratia-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  menuItems = [
    { name: 'Congreso', link: '/congreso' },
    { name: 'Senado', link: '/senado' },
    { name: 'Gobierno', link: '/gobierno' },
    { name: 'Otros Políticos', link: '/otros-politicos' },
    { name: 'Crear Político', link: '/crear-politico' },
    { name: 'Inicio', link: '/' }
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
