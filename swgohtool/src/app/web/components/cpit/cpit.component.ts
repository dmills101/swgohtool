import { Component } from '@angular/core';
import { FetchmeService } from 'src/app/core/utilities/fetchme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cpit',
  templateUrl: './cpit.component.html',
  styleUrls: ['./cpit.component.scss']
})
export class CpitComponent {
  loaded$:Observable<any>= this.fetch.loaded;
  cpit$:Observable<any>= this.fetch.cpit;
  public constructor(private fetch:FetchmeService,
    ){
   

 }
}
