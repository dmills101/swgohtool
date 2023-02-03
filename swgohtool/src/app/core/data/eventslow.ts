 

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
                    'The Mandalorian (Beskar Armor)',
                    'event',
                    'light',
                    [
                        new FarmUnit('Kuiil', 7),
                        new FarmUnit('Cara Dune', 7),
                        new FarmUnit('IG-11', 7),
                        new FarmUnit('Greef Karga', 7),
                        new FarmUnit('The Mandalorian', 7),
                    ],
                    [],
                ),
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
                new Farm(
                    'Finalizer',
                    'event',
                    'dark',
                    [],
                    [
                        new FarmUnit('First Order TIE Fighter', 7),
                    new FarmUnit(`Hound's Tooth`, 7),
                    new FarmUnit(`Kylo Ren's Command Shuttle`, 7),
                    new FarmUnit('Slave I', 7),
                    new FarmUnit('TIE Silencer', 7),
                    new FarmUnit('TIE Advanced x1', 7),
                    new FarmUnit('Xanadu Blood', 7),
                    new FarmUnit('Executrix', 7),
                    new FarmUnit('Home One', 7),
                    new FarmUnit('Endurance', 7),],
                ),
                new Farm( 
                    'Raddus',
                    'event',
                    'light',
                    [],
                    [
                        new FarmUnit(`Rey's Millennium Falcon`, 7), 
                        new FarmUnit(`Resistance X-wing`, 7),
                        new FarmUnit(`Poe Dameron's X-wing`, 7),
                        new FarmUnit(`Hound's Tooth`, 7),
                        new FarmUnit('Ebon Hawk', 7),
                        new FarmUnit(`Ahsoka Tano's Jedi Starfighter`, 7),
                        new FarmUnit(`Lando's Millennium Falcon`, 7),
                        new FarmUnit('Executrix', 7),
                        new FarmUnit('Home One', 7),
                        new FarmUnit('Endurance', 7),
                    ],
                ),
            ]
        )
        
        
            return this.pkfarm;
        }
}
