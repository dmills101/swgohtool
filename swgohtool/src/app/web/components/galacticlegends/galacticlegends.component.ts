import { Component } from '@angular/core';
import { FetchmeService } from 'src/app/core/utilities/fetchme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-galacticlegends',
  templateUrl: './galacticlegends.component.html',
  styleUrls: ['./galacticlegends.component.scss']
})
export class GalacticlegendsComponent {
  loaded$:Observable<any>= this.fetch.loaded;
   legends$:Observable<any>= this.fetch.legends;

  public constructor(private fetch:FetchmeService,
     ){
    
 
  }
}
