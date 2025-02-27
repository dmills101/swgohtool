 

import { Farm, FarmCategory, FarmUnit } from "../classes/cls-frm";
export class Eventslow {
    public pkfarm:FarmCategory | undefined;

    public constructor(){
        this.renew();
    }

    public renew():FarmCategory{
         this.pkfarm =  new FarmCategory(
            'Events',
            [
                new Farm(
                    'C-3PO',
                    'event',
                    'light',
                    [
                        new FarmUnit('Chief Chirpa', 7),
                        new FarmUnit('Ewok Elder', 7),
                        new FarmUnit('Ewok Scout', 7),
                        new FarmUnit('Logray', 7),
                        new FarmUnit('Paploo', 7),
                        new FarmUnit('Teebo', 7),
                        new FarmUnit('Wicket', 7),
                    ],
                    [],
                ),
                
                new Farm(
                    'Chewbacca',
                    'event',
                    'light',
                    [
                        new FarmUnit('Boba Fett', 7),
                        new FarmUnit('Bossk', 7),
                        new FarmUnit('Cad Bane', 7),
                        new FarmUnit('Dengar', 7),
                        new FarmUnit('Greedo', 7),
                        new FarmUnit('Greef Karga', 7),
                        new FarmUnit('IG-88', 7),
                        new FarmUnit('Jango Fett', 7),
                        new FarmUnit('The Mandalorian', 7),
                    ],
                    [],
                ),
                new Farm(
                    "Han's Millennium Falcon",
                    'event',
                    'light',
                    [
                      
                    ],
                    [  
                        new FarmUnit("Hound's Tooth", 7),
                    new FarmUnit('Slave I', 7),
                    new FarmUnit('Xanadu Blood', 7),
                    new FarmUnit('IG-2000', 7),
                    new FarmUnit('Razor Crest', 7),
                    new FarmUnit('Chimaera', 7),
                    new FarmUnit('Endurance', 7),
                    new FarmUnit('Home One', 7),
                 ],
                ),

            ]
        )
        
        
            return this.pkfarm;
        }
}
