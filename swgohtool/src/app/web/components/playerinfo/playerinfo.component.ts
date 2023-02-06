import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchmeService } from 'src/app/core/utilities/fetchme.service';

@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.component.html',
  styleUrls: ['./playerinfo.component.scss']
})
export class PlayerinfoComponent {
  loaded$:Observable<any>= this.fetch.loaded;
  playerdata$:Observable<any>= this.fetch.playerdata;
  gls$:Observable<any>= this.fetch.gls;
  error$:Observable<any>= this.fetch.error;

  public constructor(private fetch:FetchmeService,
     ){
    
 
  }
}
