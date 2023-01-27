import { Component } from '@angular/core';
import { categories } from './core/data/cats';
import { FetchmeService } from './core/utilities/fetchme.service';
import legends from './core/data/gls'; 
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators }  from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  evnts$:Observable<any>= this.fetch.evnts;

urlparams:any;
  
  checkoutForm:FormGroup = this.formBuilder.group({
    playerid: ''//'142367359','357182769'
  });

  async ngOnInit(){
   // this.playerdata$ 
//this.loaded$ = this.fetch.loaded;
this.route.queryParams
.subscribe(async params => {
  this.urlparams=params;
  //console.log(params); // { orderby: "price" }
  this.checkoutForm.patchValue({playerid:params['playerid']});
  await this.fetch.populatePlayer(this.checkoutForm.controls['playerid'].value);
}
);
}

  public constructor(private fetch:FetchmeService,
    private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router){
    console.log("add me");
 
  }

  async fetchData(){
    //await this.fetch.populateShips();
    //await this.fetch.populateUnits();
    //let player = await this.fetch.populatePlayer('357182769');    
    if(this.urlparams['playerid'] != this.checkoutForm.controls['playerid'].value){
      let lnk = `/?playerid=${this.checkoutForm.controls['playerid'].value}`;
      this.router.navigateByUrl(lnk);
    }else{
    let player = await this.fetch.populatePlayer(this.checkoutForm.controls['playerid'].value);
    }
    //console.log(player);
  }

  test(){
    console.log(this.fetch.units);
    console.log(this.fetch.ships);
  }
}
