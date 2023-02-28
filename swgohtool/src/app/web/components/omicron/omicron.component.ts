import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-omicron',
  templateUrl: './omicron.component.html',
  styleUrls: ['./omicron.component.scss']
})
export class OmicronComponent {
  @Input() omicron:any = undefined;

}
