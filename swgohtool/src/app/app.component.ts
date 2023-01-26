import { Component } from '@angular/core';
import { categories } from './core/data/cats';
import { FetchmeService } from './core/utilities/fetchme.service';
import legends from './core/data/gls'; 
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators }  from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swgohtool';

  ships$:Observable<any> = this.fetch.ships;
  units$:Observable<any> = this.fetch.units;
  playerdata$:Observable<any>= this.fetch.playerdata;
  loaded$:Observable<any>= this.fetch.loaded;
  legends$:Observable<any>= this.fetch.legends;
  events$:Observable<any>= this.fetch.events;
  gls$:Observable<any>= this.fetch.gls;

  checkoutForm:any = this.formBuilder.group({
    playerid: '142367359'
  });

  async ngOnInit(){
   // this.playerdata$ 
//this.loaded$ = this.fetch.loaded;
}

  public constructor(private fetch:FetchmeService,
    private formBuilder: FormBuilder,){
    console.log("add me");
 
  }

  async fetchData(){
    //await this.fetch.populateShips();
    //await this.fetch.populateUnits();
    //let player = await this.fetch.populatePlayer('357182769');
    let player = await this.fetch.populatePlayer(this.checkoutForm.get('playerid').value);
    console.log(player);
  }

  test(){
    console.log(this.fetch.units);
    console.log(this.fetch.ships);
  }
}
