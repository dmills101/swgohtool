import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { categories } from '../data/cats';
//import legends from '../../core/data/gls'; 
//import  categories from '../../core/data/cats'; 


@Injectable({
  providedIn: 'root'
})
export class FetchmeService {

  //proxy_cors = "https://corsproxy.io/?";
  proxy_cors = "https://panosweb.se/px/proxy.php?url=";
  //              https://panosweb.se/proxy/proxy.php?url=http://api.swgoh.gg/ships/

  private _ships = new BehaviorSubject<any>([]);
  ships = this._ships.asObservable();
  shipsobj:any;
  changeShips(newData:any){
    this.shipsobj = newData;
    this._ships.next(newData);
  }

  private _units = new BehaviorSubject<any>([]);
  units = this._units.asObservable();
  unitsobj:any;
  changeUnits(newData:any){
    this.unitsobj = newData;
        this._units.next(newData);
  }

  private _playerdata = new BehaviorSubject<any>([]);
  playerdata = this._playerdata.asObservable();
  changePlayerData(newData:any){
    this._playerdata.next(newData);
  }

  private _loaded = new BehaviorSubject<boolean>(false);
  loaded = this._loaded.asObservable();
  changeLoaded(newData:any){
    this._loaded.next(newData);
  }

  private _legends = new BehaviorSubject<any>([]);
  legends = this._legends.asObservable();
  changeLegends(newData:any){
    this._legends.next(newData);
  }

  private _events = new BehaviorSubject<any>([]);
  events = this._events.asObservable();
  changeEvents(newData:any){
    this._events.next(newData);
  }

  private _gls = new BehaviorSubject<any>([]);
  gls = this._gls.asObservable();
  changeGls(newData:any){
    this._gls.next(newData);
  }

  private _eventslow = new BehaviorSubject<any>([]);
  eventslow = this._eventslow.asObservable();
  changeEventsLow(newData:any){
    this._eventslow.next(newData);
  }
  private _evntslw = new BehaviorSubject<any>([]);
  evntslw = this._evntslw.asObservable();
  changeEvntsLW(newData:any){
    this._evntslw.next(newData);
  }

  private _evnts = new BehaviorSubject<any>([]);
  evnts = this._evnts.asObservable();
  changeEvnts(newData:any){
    this._evnts.next(newData);
  }
  
  
  private _guild = new BehaviorSubject<any>([]);
  guild = this._guild.asObservable();
  changeGuild(newData:any){
    this._guild.next(newData);
  }

  private _goodteams = new BehaviorSubject<any>([]);
  goodteams = this._goodteams.asObservable();
  changeGoodTeams(newData:any){
    this._goodteams.next(newData);
  }
  private _goodteamslw = new BehaviorSubject<any>([]);
  goodteamslw = this._goodteamslw.asObservable();
  changeGoodTeamsLW(newData:any){
    this._goodteamslw.next(newData);
  }
  
  private _cpit = new BehaviorSubject<any>([]);
  cpit = this._cpit.asObservable();
  changeCpit(newData:any){
    this._cpit.next(newData);
  }
  private _cpitlw = new BehaviorSubject<any>([]);
  cpitlw = this._cpitlw.asObservable();
  changeCpitLW(newData:any){
    this._cpitlw.next(newData);
  }

  constructor(private http: HttpClient) { 

    this.changeLoaded(false);
  }

   getData(url:string){
    const url__in = `${this.proxy_cors}${url}`;
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.get(url__in, {headers:headers});
   }
   getDataForPlayerSub(pid:string){
    const url__in = `${this.proxy_cors}http://api.swgoh.gg/player/${pid}/`;
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.get(url__in, {headers:headers});
     
   }

   async getDataForGuild(){
    //http://api.swgoh.gg/guild-profile/7skNKIClReOBSq8jfL_F0g
    const url__in = `${this.proxy_cors}http://api.swgoh.gg/guild-profile/7skNKIClReOBSq8jfL_F0g/`;
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.get(url__in, {headers:headers}).toPromise();

   }

   async getDataForPlayer(pid:string){
    const url__in = `${this.proxy_cors}http://api.swgoh.gg/player/${pid}/`;
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.get(url__in, {headers:headers}).toPromise();
     
   }

   objectComparisonCallback = (arrayItemA:any, arrayItemB:any) => {
    if (arrayItemA.galactic_power < arrayItemB.galactic_power) {
      return 1
    }
  
    if (arrayItemA.galactic_power > arrayItemB.galactic_power) {
      return -1
    }
  
    return 0
  }

   async populateGuild(){
    let data = await this.getDataForGuild();
    let jsonstr = JSON.stringify(data);
    let guild = JSON.parse(jsonstr);
    /*
members.
  player_name
  ally_code
  galactic_power
*/
    //console.log(data);
    let ddt = guild.data.members.sort(this.objectComparisonCallback);
    this.changeGuild(ddt);
   }

   async populatePlayer(pid:string){
     if(!pid){
      return;
    }
    this.changeLoaded(false);
    await this.populateShips();
    await this.populateUnits();
    
      let data = await this.getDataForPlayer(pid);
      
      //console.log(data);
      let jsonstr = JSON.stringify(data);
      let player = JSON.parse(jsonstr);
     // let dv = player.units.find((x: { data: any; })=>x.data.name == 'Darth Vader');
     // let dv1 = player.units.find((x: { data: any; })=>x.data.name == 'Kylo Ren (Unmasked)');
     // let dv2 = player.units.find((x: { data: any; })=>x.data.name == 'Supreme Leader Kylo Ren');
     let gls_with_ultimate = player.units.filter((x: { data: any; })=>x.data.is_galactic_legend);
      //let gls_without_ultimate = player.units.filter((x: { data: any; })=>x.data.is_galactic_legend && !x.data.has_ultimate);

    this.changeGls(gls_with_ultimate);

    let cats = new categories();
    cats.renew();
    cats.player = player.data;
    this.Loop(cats.legends,player,true,gls_with_ultimate);
    /*for (let i = 0; i <= cats.legends.farms.length - 1; i++) {
       let frm = cats.legends.farms[i];
       try{
        frm.image = this.unitsobj.find((x: { name: any; })=>x.name == frm.name).image;
        }catch(e){
          frm.image = this.shipsobj.find((x: { name: any; })=>x.name == frm.name).image;
       
        }
        frm.ok = gls_with_ultimate.find((x: { data: { name: string; }; })=>x.data.name == frm.name);
        frm.ultimate = gls_with_ultimate.find((x: { data: any; })=>x.data.name == frm.name && x.data.has_ultimate) != null;
       for (let j = 0; j <= frm.units.length - 1; j++) {
         let unt = frm.units[j];
         let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
         let itm_all = null;
         try{
          itm_all = this.unitsobj.find((x: { name: any; })=>x.name == itm.data.name);
        }catch(e){
          itm_all = this.unitsobj.find((x: { name: any; })=>x.name == unt.name);

        }
        unt.setPlayerItem(itm,itm_all);
       }
       for (let j = 0; j <= frm.ships.length - 1; j++) {
        //frm.image = this.unitsobj.find((x: { name: any; })=>x.name == frm.name).image;
        let unt = frm.ships[j];
        let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
        let itm_all = null;
        try{
         itm_all = this.shipsobj.find((x: { name: any; })=>x.name == itm.data.name);
       }catch(e){
        itm_all = this.shipsobj.find((x: { name: any; })=>x.name == unt.name);
      }
       unt.setPlayerItem(itm,itm_all);
         
      }
     }*/

     this.Loop(cats.events,player);
    /* for (let i = 0; i <= cats.events.farms.length - 1; i++) {
      let frm = cats.events.farms[i];
      try{
      frm.image = this.unitsobj.find((x: { name: any; })=>x.name == frm.name).image;
      }catch(e){
        frm.image = this.shipsobj.find((x: { name: any; })=>x.name == frm.name).image;
     
      }        
      frm.ok = player.units.find((x: { data: { name: string; }; })=>x.data.name == frm.name) != null;
      frm.ultimate = true;

      for (let j = 0; j <= frm.units.length - 1; j++) {
        let unt = frm.units[j];
        let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
        let itm_all = null;
        try{
         itm_all = this.unitsobj.find((x: { name: any; })=>x.name == itm.data.name);
       }catch(e){
        itm_all = this.unitsobj.find((x: { name: any; })=>x.name == unt.name);
      }
       unt.setPlayerItem(itm,itm_all);
       
      }
      for (let j = 0; j <= frm.ships.length - 1; j++) {
       let unt = frm.ships[j];
       let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
       let itm_all = null;
       try{
        itm_all = this.shipsobj.find((x: { name: any; })=>x.name == itm.data.name);
      }catch(e){
        itm_all = this.shipsobj.find((x: { name: any; })=>x.name == unt.name);
      }
     unt.setPlayerItem(itm,itm_all);
        
     }
    }*/

    this.Loop(cats.eventslow,player);
    this.Loop(cats.goodteams,player);
   /* for (let i = 0; i <= cats.eventslow.farms.length - 1; i++) {
      let frm = cats.eventslow.farms[i];
      try{
      frm.image = this.unitsobj.find((x: { name: any; })=>x.name == frm.name).image;
      }catch(e){
        frm.image = this.shipsobj.find((x: { name: any; })=>x.name == frm.name).image;
     
      }        
      frm.ok = player.units.find((x: { data: { name: string; }; })=>x.data.name == frm.name) != null;
      let found = player.units.find((x: { data: { name: string; }; })=>x.data.name == frm.name);
      if(found){
         // console.log(found);
          frm.setFound(found);
          if(found.data.rarity==7){
            frm.ok= true;
          }else{
            frm.ok = false;
          }
          //frm.ok = true;
      }else{
        frm.ok= false;
      }
      frm.ultimate = true;

      for (let j = 0; j <= frm.units.length - 1; j++) {
        let unt = frm.units[j];
        let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
        let itm_all = null;
        try{
         itm_all = this.unitsobj.find((x: { name: any; })=>x.name == itm.data.name);
       }catch(e){
        itm_all = this.unitsobj.find((x: { name: any; })=>x.name == unt.name);
      }
       unt.setPlayerItem(itm,itm_all);
       
      }
      for (let j = 0; j <= frm.ships.length - 1; j++) {
       let unt = frm.ships[j];
       let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
       let itm_all = null;
       try{
        itm_all = this.shipsobj.find((x: { name: any; })=>x.name == itm.data.name);
      }catch(e){
        itm_all = this.shipsobj.find((x: { name: any; })=>x.name == unt.name);
      }
     unt.setPlayerItem(itm,itm_all);
        
     }
    }*/
    this.Loop(cats.cpit,player);
    this.changeCpit(cats.cpit.farms);
    let cpitlw = cats.cpit.farms.filter(x=> x.ok);
    this.changeCpitLW(cpitlw);


    let events = cats.events.farms.filter(x=> x.ok);
    this.changeEvnts(events);
    this.changeEventsLow(cats.eventslow.farms);
    let eventslw = cats.eventslow.farms.filter(x=> x.ok);
    this.changeEvntsLW(eventslw);

    this.changeGoodTeams(cats.goodteams.farms);
    let gtlw = cats.goodteams.farms.filter(x=> x.ok);
    this.changeGoodTeamsLW(gtlw);

     this.changePlayerData(cats.player);
    this.changeEvents(cats.events.farms);
    this.changeLegends(cats.legends.farms);
    this.changeLoaded(true);
   return cats;

   }

private Loop(eventslow:any, player:any, utl:boolean=false, gllist:any = null){
  for (let i = 0; i <= eventslow.farms.length - 1; i++) {
    let frm = eventslow.farms[i];
    try{
    frm.image = this.unitsobj.find((x: { name: any; })=>x.name == frm.name).image;
    }catch(e){
      frm.image = this.shipsobj.find((x: { name: any; })=>x.name == frm.name).image;
   
    }        
    frm.ok = player.units.find((x: { data: { name: string; }; })=>x.data.name == frm.name) != null;
    let found = player.units.find((x: { data: { name: string; }; })=>x.data.name == frm.name);
    if(found){
       // console.log(found);
        frm.setFound(found);
        if(found.data.rarity==7){
          frm.ok= true;
        }else{
          frm.ok = false;
        }
        //frm.ok = true;
    }else{
      frm.ok= false;
    }
    if(utl && gllist){
      frm.ultimate = gllist.find((x: { data: any; })=>x.data.name == frm.name && x.data.has_ultimate) != null;
    }else{
      frm.ultimate = true;
    }

    for (let j = 0; j <= frm.units.length - 1; j++) {
      let unt = frm.units[j];
      let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
      let itm_all = null;
      try{
       itm_all = this.unitsobj.find((x: { name: any; })=>x.name == itm.data.name);
     }catch(e){
      itm_all = this.unitsobj.find((x: { name: any; })=>x.name == unt.name);
    }
     unt.setPlayerItem(itm,itm_all);
     
    }
    for (let j = 0; j <= frm.ships.length - 1; j++) {
     let unt = frm.ships[j];
     let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
     let itm_all = null;
     try{
      itm_all = this.shipsobj.find((x: { name: any; })=>x.name == itm.data.name);
    }catch(e){
      itm_all = this.shipsobj.find((x: { name: any; })=>x.name == unt.name);
    }
   unt.setPlayerItem(itm,itm_all);
      
   }
  }

}


   async getDataFor(option:string){
    const url__in = `${this.proxy_cors}http://api.swgoh.gg/${option}/`;
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.get(url__in, {headers:headers}).toPromise();
     
   }

   async populateShips(){
    let data = await this.getDataFor('ships');
    //console.log(data);
    this.changeShips(data);
    return data;
   }

   async populateUnits(){
    let data = await this.getDataFor('characters');
    //console.log(data);
    this.changeUnits(data);
    return data;

   }
}
