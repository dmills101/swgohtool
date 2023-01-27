import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sw-card',
  templateUrl: './sw-card.component.html',
  styleUrls: ['./sw-card.component.scss']
})
export class SwCardComponent {
@Input() lnd:any;
}
