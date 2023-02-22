export class ClsFrm{
  //static hidecompleted:boolean = true;
  //static hidecompletedItems:boolean = true;
  static tab1_active:boolean=false;
  static tab2_active:boolean=false;
  static tab3_active:boolean=false;

}

export class Farm {
  name: string;
  type: string;
  side: string;
  units: FarmUnit[];
  ships: FarmUnit[];
  image: any = null;
  ok: boolean = false;
  ultimate: boolean = false;
  found: any;
  foundText: any = null;
  description: string;
  hasminimumpower: boolean = false;
  url:any=null;
  canhide:boolean=true;

  constructor(name: string, type: string, side: string, units: FarmUnit[], ships: FarmUnit[], desc: any = null, hasminimumpower: boolean = false,canhide:boolean=true) {
    this.name = name
    this.side = side
    this.units = units
    this.ships = ships
    this.type = type;
    this.foundText = null;
    this.description = desc;
    this.hasminimumpower = hasminimumpower;
    this.canhide=canhide;
  }

  setFound(found: any) {
    this.found = found;
    if (found.data.rarity != 7) {
      this.foundText = `Stars:${found.data.rarity}/7`;
    } else {
      this.foundText = null;
    }

    if(found && found.hasOwnProperty('data') && found.data && found.data.hasOwnProperty('url') && found.data.url){
      this.url = `https://swgoh.gg${found.data.url}`;
    }else if(found && found.hasOwnProperty('url') && found.url){
      this.url = `${found.url}`;
    } else{
      this.url=null;
    }
  }

  setFound2(found: any) {
    

    if(found && found.hasOwnProperty('data') && found.data && found.data.hasOwnProperty('url') && found.data.url){
      this.url = `https://swgoh.gg${found.data.url}`;
    }else if(found && found.hasOwnProperty('url') && found.url){
      this.url = `${found.url}`;
    } else{
      this.url=null;
    }
  }
}

export class FarmUnit {
  name: string
  stars: number
  gear_level?: number
  relic_level?: number
  minimum_power_toon?: number = 0;
  minimum_power_ship?: number = 0;
  player_itm: any;

  rarityOK: boolean = false;
  gearOK: boolean = false;
  relicOK: boolean = false;
  minimumpowerok: boolean = false;

  stars_on: number = 0;
  gear_level_on: number = 0;
  relic_level_on: number = 0;
  power: number = 0;

  image: any = null;
  url:any=null;

  constructor(name: string, stars: number, gear_level?: number, relic_level?: number, minimum_power_toon?: number, minimum_power_ship?: number) {
    this.name = name;
    this.stars = stars;
    this.gear_level = gear_level;
    this.relic_level = relic_level;
    this.minimum_power_toon = minimum_power_toon;
    this.minimum_power_ship = minimum_power_ship;

  }

  allOK() {
    return this.gearOK && this.relicOK && this.rarityOK && this.minimumpowerok;
  }

  hasTheToon() {
    return this.stars_on > 0;
  }

  setPlayerItem(item: any, item_orig: any) {
    if (item_orig && item_orig.hasOwnProperty('image') && item_orig.image) {
      this.image = item_orig.image;
    }
    if(item && item.hasOwnProperty('data') && item.data && item.data.hasOwnProperty('url') && item.data.url){
      this.url = `https://swgoh.gg${item.data.url}`;
    }else if(item_orig && item_orig.hasOwnProperty('url') && item_orig.url){
      this.url = `${item_orig.url}`;
    }else{
      this.url=null;
    }
    this.player_itm = item;
    if (item && item.hasOwnProperty('data') && item.data) {
      this.stars_on = item.data.rarity;
      this.power = item.data.power;
      this.gear_level_on = item.data.gear_level;
      this.relic_level_on = item.data.relic_tier - 2;
      if (this.relic_level_on < 0) {
        this.relic_level_on = 0;
      }

      if (this.name == "Grand Inquisitor") {
        //console.log('fafa');
      }

      this.rarityOK = (this.stars_on >= this.stars);
      if (this.gear_level) {
        this.gearOK = (this.gear_level_on >= this.gear_level);
      } else {
        this.gearOK = true;
      }
      if (this.relic_level) {
        this.relicOK = (this.relic_level_on >= this.relic_level);
      } else {
        this.relicOK = true;
      }
    } else {
      this.gearOK = false;
      this.relicOK = false;
      this.rarityOK = false;
    }

    if (this.minimum_power_ship) {
      if (this.minimum_power_ship && item && item.hasOwnProperty('data') && item.data) {
        if (this.minimum_power_ship > item.data.power) {
          this.minimumpowerok = false;
        } else {
          this.minimumpowerok = true;
        }
       } else {
        this.minimumpowerok = true;
        if (this.minimum_power_ship) {
          this.minimumpowerok = false;
        }
      }
    }
    if (this.minimum_power_toon) {
      if (this.minimum_power_toon && item && item.hasOwnProperty('data') && item.data) {
        if (this.minimum_power_toon > item.data.power) {
          this.minimumpowerok = false;
        } else {
          this.minimumpowerok = true;
        }
       } else {
        this.minimumpowerok = true;
        if (this.minimum_power_toon) {
          this.minimumpowerok = false;
        }
      }
    }

    if (!this.minimum_power_ship && !this.minimum_power_toon) {
      this.minimumpowerok = true;
    }
 
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