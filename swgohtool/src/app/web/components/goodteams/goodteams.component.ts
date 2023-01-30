import { Component } from '@angular/core';
import { FetchmeService } from 'src/app/core/utilities/fetchme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-goodteams',
  templateUrl: './goodteams.component.html',
  styleUrls: ['./goodteams.component.scss']
})
export class GoodteamsComponent {
  loaded$:Observable<any>= this.fetch.loaded;
  goodteams$:Observable<any>= this.fetch.goodteams;
  public constructor(private fetch:FetchmeService,
    ){
   

 }

}
