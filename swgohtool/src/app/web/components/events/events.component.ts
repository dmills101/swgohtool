import { Component } from '@angular/core';
import { FetchmeService } from 'src/app/core/utilities/fetchme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  loaded$:Observable<any>= this.fetch.loaded;
  events$:Observable<any>= this.fetch.events;

 public constructor(private fetch:FetchmeService,
    ){
   

 }
}
