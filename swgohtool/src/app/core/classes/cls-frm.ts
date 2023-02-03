export class Farm {
    name: string;
    type: string;
    side: string;
    units: FarmUnit[];
    ships: FarmUnit[];
    image:any = null;
    ok:boolean = false;
    ultimate:boolean = false;
  found:any;
  foundText:any = null;
  description: string;
hasminimumpower:boolean=false;

    constructor(name: string, type: string, side: string, units: FarmUnit[], ships: FarmUnit[],desc:any=null,hasminimumpower:boolean=false) {
        this.name = name
        this.side = side
        this.units = units
        this.ships = ships
        this.type = type;
        this.foundText =null;
        this.description =desc;
        this.hasminimumpower=hasminimumpower;
    }

    setFound(found:any){
      this.found =found;
      if(found.data.rarity != 7){
        this.foundText = `${found.data.rarity}/7`;
      }else{
        this.foundText=null;
      }
    }
}

export class FarmUnit {
    name: string
    stars: number
    gear_level?: number
    relic_level?: number
    minimum_power_toon?: number=0;
    minimum_power_ship?: number=0;
player_itm:any;

  rarityOK:boolean=false;
  gearOK:boolean=false;
  relicOK:boolean = false;
  minimumpowerok:boolean = false;

  stars_on: number=0;
  gear_level_on: number=0;
  relic_level_on: number=0;
  power:number = 0;

  image:any = null;

    constructor(name: string, stars: number, gear_level?: number, relic_level?: number,minimum_power_toon?: number,minimum_power_ship?: number) {
        this.name = name;
        this.stars = stars;
        this.gear_level = gear_level;
        this.relic_level = relic_level;
        this.minimum_power_toon = minimum_power_toon;
        this.minimum_power_ship = minimum_power_ship;

    }

allOK(){
  return this.gearOK && this.relicOK && this.rarityOK && this.minimumpowerok;
}

hasTheToon(){
  return this.stars_on>0;
}

    setPlayerItem(item:any, item_orig:any){
      if(item_orig && item_orig.hasOwnProperty('image') && item_orig.image){
        this.image = item_orig.image;
      }
        this.player_itm = item;
        if(item && item.hasOwnProperty('data') && item.data){
        this.stars_on = item.data.rarity;
        this.power = item.data.power;
        this.gear_level_on = item.data.gear_level;
        this.relic_level_on = item.data.relic_tier -2;
        if(this.relic_level_on < 0){
          this.relic_level_on=0;
        }

        if(this.name == "Grand Inquisitor"){
          //console.log('fafa');
        }
        
        this.rarityOK = (this.stars_on >= this.stars);
        if(this.gear_level){
        this.gearOK = (this.gear_level_on >= this.gear_level);
        }else{
          this.gearOK = true;
        }
        if(this.relic_level){
        this.relicOK = (this.relic_level_on >= this.relic_level);
        }else{
          this.relicOK = true;
        }
      }else{
        this.gearOK = false;
        this.relicOK = false;
        this.rarityOK = false;
      }

      if(this.minimum_power_ship){
      if(this.minimum_power_ship  && item && item.hasOwnProperty('data') && item.data){
        if(this.minimum_power_ship > item.data.power){
          this.minimumpowerok = false;
        }else{
          this.minimumpowerok=true;
        }
        //this.minimumpowerok = (this.minimum_power_ship >> item.data.power)?false:true;
      }else  {
        this.minimumpowerok= true;
        if(this.minimum_power_ship){
          this.minimumpowerok = false;
        }
      } 
    }
    if(this.minimum_power_toon){
      if(this.minimum_power_toon   && item && item.hasOwnProperty('data') && item.data){
        if(this.minimum_power_toon > item.data.power){
          this.minimumpowerok = false;
        }else{
          this.minimumpowerok=true;
        }
        //this.minimumpowerok = (this.minimum_power_toon >> item.data.power)?false:true;
      }else  {
        this.minimumpowerok= true;
        if(this.minimum_power_toon){
          this.minimumpowerok = false;
        }
      } 
    }

    if(!this.minimum_power_ship && !this.minimum_power_toon){
      this.minimumpowerok=true;
    }
        //item.data.
      //  relic_tier - 2
//rarity : stars
//gear_level

        //todo: calculate status
        /* if (itm) {
           let chk = unt.relic_level;
           try {
             let found = itm.data.relic_tier - 2;
             if (chk && (found >= chk)) {
               console.log('Relic ok:' + unt.name);
             }
           } catch (e) {
             console.error(e);
           }
         }*/

            /*legends.farms.forEach(frm => {
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
      });*/
     // console.log(dv);

/*
relic_tier - 2
rarity : stars
gear_level

is_galactic_legend

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
    }
}

export const spacer = new FarmUnit('Darth Revan', 0)

export class FarmCategory {
    name: string
    farms: Farm[]

    public constructor(name: string, farms: Farm[]) {
        this.name = name
        this.farms = farms
    }
}