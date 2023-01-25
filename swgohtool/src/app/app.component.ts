import { Component } from '@angular/core';
import { categories } from './core/data/cats';
import { FetchmeService } from './core/utilities/fetchme.service';
import legends from './core/data/gls'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swgohtool';
fmm:any;

  public constructor(private fetch:FetchmeService){
    console.log("add me");
    fetch.getData(`http://api.swgoh.gg/player/142367359/`).subscribe(data=>{
      console.log(data);


      let jsonstr = JSON.stringify(data);
      let player = JSON.parse(jsonstr);
      let dv = player.units.find((x: { data: any; })=>x.data.name == 'Darth Vader');
      let dv1 = player.units.find((x: { data: any; })=>x.data.name == 'Kylo Ren (Unmasked)');
      let dv2 = player.units.find((x: { data: any; })=>x.data.name == 'Supreme Leader Kylo Ren');

      legends.farms.forEach(frm => {
        console.log(frm);
        frm.units.forEach(unt =>{
          let itm = player.units.find((x: { data: any; })=>x.data.name == unt.name);
          if(itm){
          let chk = unt.relic_level;
          try{
          let found = itm.data.relic_tier-2;
          if(chk && (found >= chk)){
            console.log('Relic ok:' + unt.name);
          }
        }catch(e){
          console.error(e);
        }
        }
          
        });
      });
      console.log(dv);

/*
relic_tier - 2

base_id:
'VADER'
combat_type:
1
gear:
(6) [{…}, {…}, {…}, {…}, {…}, {…}]
gear_level:
13
has_ultimate:
false
is_galactic_legend:
false
level:
85
mod_set_ids:
(2) ['4', '5']
name:
'Darth Vader'
omicron_abilities:
(0) []
power:
32952
rarity:
7
relic_tier:
9
stat_diffs:
{1: 19862, 2: 0, 3: 0, 4: 0, 5: 100, 6: 1554, 7: 1593, 8: 7.033940588757865, 9: 7.0779472989846965, 10: 0, 11: 0, 12: 0, 13: 0, 14: 28.000000000000007, 15: 28.000000000000007, 16: 0, 17: 0.13924000000000003, 18: 0.02571000000000001, 27: 0, 28: 5292, 37: 0, 38: 0, 39: 0, 40: 0}
stats:
{1: 71764, 2: 2599, 3: 1759, 4: 2013, 5: 241, 6: 7707, 7: 7923, 8: 59.968602825745684, 9: 48.022829188748474, 10: 265, 11: 90, 12: 2, 13: 2, 14: 83.66666666666667, 15: 39.87500000000001, 16: 1.5, 17: 0.63924, 18: 0.45571000000000006, 27: 0.15, 28: 53120, 37: 13.5, 38: 13.5, 39: 0, 40: 0}
url:
'/p/142367359/characters/darth-vader'
zeta_abilities:
(2) ['uniqueskill_VADER01', 'specialskill_VADER03']
*/

      //const parsed = JSON.parse(data.toString());
      //    let sigh = {}
    /*  forEach(parsed.units, function(unit) {
          sigh[unit.data.name] = unit.data
      })
  
      player.set(parsed.data)
      units.set(sigh)
      loading.set(false)*/
    });
    fetch.getData(`http://api.swgoh.gg/characters/`).subscribe(data=>{
      console.log(data);
      
      /*
       thingStore.set(keyBy(JSON.parse(data), 'name'))
        */
          
    });

    fetch.getData(`http://api.swgoh.gg/ships/`).subscribe(data=>{
      console.log(data);
      
      /*
       thingStore.set(keyBy(JSON.parse(data), 'name'))
        */
          
    });
  }


}
