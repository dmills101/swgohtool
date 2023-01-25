import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { categories } from '../data/cats';
//import legends from '../../core/data/gls'; 
//import  categories from '../../core/data/cats'; 


@Injectable({
  providedIn: 'root'
})
export class FetchmeService {

  proxy_cors = "https://corsproxy.io/?";

ships:any;
units:any;

  constructor(private http: HttpClient) { }

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

   async getDataForPlayer(pid:string){
    const url__in = `${this.proxy_cors}http://api.swgoh.gg/player/${pid}/`;
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.get(url__in, {headers:headers}).toPromise();
     
   }

   async populatePlayer(pid:string){
      let data = await this.getDataForPlayer(pid);
      
      console.log(data);
      let jsonstr = JSON.stringify(data);
      let player = JSON.parse(jsonstr);
     // let dv = player.units.find((x: { data: any; })=>x.data.name == 'Darth Vader');
     // let dv1 = player.units.find((x: { data: any; })=>x.data.name == 'Kylo Ren (Unmasked)');
     // let dv2 = player.units.find((x: { data: any; })=>x.data.name == 'Supreme Leader Kylo Ren');
     let gls_with_ultimate = player.units.filter((x: { data: any; })=>x.data.is_galactic_legend && x.data.has_ultimate);
      let gls_without_ultimate = player.units.filter((x: { data: any; })=>x.data.is_galactic_legend && !x.data.has_ultimate);

    let cats = new categories();
cats.player = player.data;
     for (let i = 0; i <= cats.legends.farms.length - 1; i++) {
       let frm = cats.legends.farms[i];
       for (let j = 0; j <= frm.units.length - 1; j++) {
         let unt = frm.units[j];
         let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
         unt.setPlayerItem(itm);
        
       }
       for (let j = 0; j <= frm.ships.length - 1; j++) {
        let unt = frm.ships[j];
        let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
        unt.setPlayerItem(itm);
         
      }
     }

     for (let i = 0; i <= cats.events.farms.length - 1; i++) {
      let frm = cats.events.farms[i];
      for (let j = 0; j <= frm.units.length - 1; j++) {
        let unt = frm.units[j];
        let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
        unt.setPlayerItem(itm);
       
      }
      for (let j = 0; j <= frm.ships.length - 1; j++) {
       let unt = frm.ships[j];
       let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
       unt.setPlayerItem(itm);
        
     }
    }

   
      return cats;

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
    console.log(data);
    this.ships =data;
    return data;
   }

   async populateUnits(){
    let data = await this.getDataFor('characters');
    console.log(data);
    this.units = data;
    return data;

   }
}
