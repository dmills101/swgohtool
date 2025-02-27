import { Farm, FarmCategory, FarmUnit } from "../classes/cls-frm";

export class Goodteams {
    public pkfarm:FarmCategory | undefined;

    public constructor(){
        this.renew();
    }

    public renew():FarmCategory{
         this.pkfarm =  new FarmCategory(
            'Events',
            [
                new Farm(
                    'Wat Tambor',
                    'event',
                    'light',
                    [
                        new FarmUnit('Geonosian Brood Alpha', 7),
                        new FarmUnit('Geonosian Soldier', 7),
                        new FarmUnit('Geonosian Spy', 7),
                        new FarmUnit('Poggle the Lesser', 7),
                        new FarmUnit('Sun Fac', 7),
                      
                    ],
                    [],
                ),
                new Farm(
                    'Ki-Adi-Mundi',
                    'event',
                    'light',
                    [
                        new FarmUnit('ARC Trooper', 7),
                        new FarmUnit('CC-2224 "Cody"', 7),
                        new FarmUnit('Clone Sergeant - Phase I', 7),
                        new FarmUnit('CT-21-0408 "Echo"', 7),
                        new FarmUnit('CT-5555 "Fives"', 7),
                        new FarmUnit('CT-7567 "Rex"', 7),
                        new FarmUnit('Echo', 7),
                        new FarmUnit('Hunter', 7),
                        new FarmUnit('Omega', 7),
                        new FarmUnit('Tech', 7),
                        new FarmUnit('Wrecker', 7),
                      
                    ],
                    [],
                ),

            ]
        )
        
        
            return this.pkfarm;
        }
}
