import { Component } from '@angular/core';
import { FetchmeService } from 'src/app/core/utilities/fetchme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eventslow',
  templateUrl: './eventslow.component.html',
  styleUrls: ['./eventslow.component.scss']
})
export class EventslowComponent {
  loaded$:Observable<any>= this.fetch.loaded;
  eventslow$:Observable<any>= this.fetch.eventslow;
  public constructor(private fetch:FetchmeService,
    ){
   

 }
}
