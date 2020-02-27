import { Component, OnInit, Input } from '@angular/core';
import { Politician } from '../politician.model';

@Component({
  selector: 'neocratia-politician-view',
  templateUrl: './politician-view.component.html',
  styleUrls: ['./politician-view.component.scss']
})
export class PoliticianViewComponent {
  @Input() politician: Politician;
  @Input() id: string;
}
