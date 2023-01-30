import { Component, HostListener } from '@angular/core';
import { categories } from './core/data/cats';
import { FetchmeService } from './core/utilities/fetchme.service';
//import legends from './core/data/gls'; 
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators }  from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

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
  eventslow$:Observable<any>= this.fetch.eventslow;
  gls$:Observable<any>= this.fetch.gls;
  evnts$:Observable<any>= this.fetch.evnts;
  evntslw$:Observable<any>= this.fetch.evntslw;
  guild$:Observable<any>= this.fetch.guild;
  goodteams$:Observable<any>= this.fetch.goodteams;
  goodteamslw$:Observable<any>= this.fetch.goodteamslw;
  cpit$:Observable<any>= this.fetch.cpit;
  cpitlw$:Observable<any>= this.fetch.cpitlw;

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

await this.fetch.populateGuild();
}

  public constructor(private fetch:FetchmeService,
    private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router){
    //console.log("add me");
 
  }

  //@HostListener('document:keypress', ['$event'])
  @HostListener('keydown', ['$event'])
  async fetchData1($event:KeyboardEvent){
    if ($event.key == "Enter" ){
      await this.fetchData();
    }
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

  changeplayer(lnd:any){
    let lnk = `/?playerid=${lnd.ally_code}`;
    this.router.navigateByUrl(lnk);

  }

  test(){
    //console.log(this.fetch.units);
    //console.log(this.fetch.ships);
  }
}
