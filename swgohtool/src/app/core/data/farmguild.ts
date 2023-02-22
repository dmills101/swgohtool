import { Farm, FarmCategory, FarmUnit } from "../classes/cls-frm";

export class Farmguild {
    public farmHigh: FarmCategory | undefined;
    public farmMedium: FarmCategory | undefined;
    public farmLow: FarmCategory | undefined;

    public farmTWSquads: FarmCategory | undefined;
    public farmTBSquads: FarmCategory | undefined;
    public farmGLSquads: FarmCategory | undefined;
    public farmGLShips: FarmCategory | undefined;
    public farmKeySquads: FarmCategory | undefined;
    public farmCapitalShips: FarmCategory | undefined;
    public farmKeyFleets: FarmCategory | undefined;


    public constructor() {
        this.renewHigh();
        this.renewMedium();
        this.renewLow();
        this.renewTWSquads();
        this.renewGLSquads();
        this.renewGLShips();
        this.renewKeySquads();
        this.renewCapitalShips();
    }

    public renewKeyFleets(): FarmCategory {
        this.farmKeyFleets = new FarmCategory(
            'Key fleets', [
                new Farm(
                    'Galatic Republic Base',
                    'event',
                    'light',
                    [
                    ],
                    [
                        new FarmUnit("Negotiator", 7),
                        new FarmUnit("Hound's Tooth", 7),
                        new FarmUnit("Rex's ARC-170", 7),
                        new FarmUnit("Umbaran Starfighter", 7),
                        new FarmUnit("Ahsoka Tano's Jedi Starfighter", 7 ),
                        new FarmUnit('Anakin\'s Eta-2 Starfighter', 7),
                        new FarmUnit('BTL-B Y-wing Starfighter', 7),                        
                    ],null,false,false
                ),
                new Farm(
                    'Seperatists Base',
                    'event',
                    'light',
                    [
                    ],
                    [
                        new FarmUnit("Malevolence", 7),
                        new FarmUnit("Hyena Bomber", 7),
                        new FarmUnit("Vulture Droid", 7),
                        new FarmUnit("Geonosian Spy's Starfighter", 7),
                        new FarmUnit("Sun Fac's Geonosian Starfighter", 7),
                        new FarmUnit("Geonosian Soldier's Starfighter", 7),
                     ],null,false,false
                ),
            ]
        );
        return this.farmKeyFleets;
    }

    public renewCapitalShips(): FarmCategory {
        this.farmCapitalShips = new FarmCategory(
            'Capital ships', [
                /*new Farm(
                    'Jedi Master Kenobi',
                    'event',
                    'light',
                    [
                        new FarmUnit('Commander Ahsoka Tano', 7,13,5),
                        new FarmUnit('General Kenobi', 7,13,8),
                        new FarmUnit('General Skywalker', 7,13,8),
                        new FarmUnit('Ahsoka Tano', 7,13,5),                      
                    ],
                    [],null,false,false
                ),*/
            ]
        );
        return this.farmCapitalShips;
    }

    public renewKeySquads(): FarmCategory {
        this.farmKeySquads = new FarmCategory(
            'Key squads', [
                new Farm(
                    'Shaak/GAS Clones',
                    'event',
                    'light',
                    [
                        new FarmUnit('Shaak Ti', 7, 13, 7),
                        new FarmUnit('General Skywalker', 7,13,8),
                        new FarmUnit('CT-7567 "Rex"', 7,13,5),
                        new FarmUnit('CT-5555 "Fives"', 7,13,5),
                        new FarmUnit('CT-21-0408 "Echo"', 7,13,7),
                        new FarmUnit('ARC Trooper', 7,13,8),
      
                    ],
                    [],null,false,false
                ),
                new Farm(
                    'JKR',
                    'event',
                    'light',
                    [
                        new FarmUnit('Jedi Knight Revan', 7, 13, 5),
                        new FarmUnit('Bastila Shan', 7,13,5),
                        new FarmUnit('Jolee Bindo', 7,13,5),
                        new FarmUnit('General Kenobi', 7,13,8),
                        new FarmUnit('Hermit Yoda', 7,13,5),
      
                    ],
                    [],null,false,false
                ),
                new Farm(
                    'DR Base',
                    'event',
                    'light',
                    [
                        new FarmUnit('Darth Revan', 7, 13, 5),
                        new FarmUnit('Darth Malak', 7,13,5),
                        new FarmUnit('Bastila Shan (Fallen)', 7,13,5),
                        new FarmUnit('Sith Marauder', 7,13,7),
      
                    ],
                    [],null,false,false
                ),
            ]
        );
        return this.farmKeySquads;
    }

    public renewGLShips(): FarmCategory {
        this.farmGLShips = new FarmCategory(
            'GL ship fleets', [
                new Farm(
                    'Executor',
                    'event',
                    'light',
                    [
                       
                    ],
                    [ 
                        new FarmUnit('Executor', 7),
                    new FarmUnit("Hound's Tooth", 7),
                    new FarmUnit('Slave I', 7),
                    new FarmUnit('Xanadu Blood', 7),
                    new FarmUnit('IG-2000', 7),
                    new FarmUnit('Razor Crest', 7),],null,false,false
                ),
                new Farm(
                    'Profundity',
                    'event',
                    'light',
                    [
                      
                    ],
                    [  new FarmUnit('Profundity', 7),
                    new FarmUnit('Han\'s Millennium Falcon', 7),
                    new FarmUnit('Outrider', 7),
                    new FarmUnit('Rebel Y-wing', 7),],null,false,false
                ),
            ]
        );
        return this.farmGLShips;
    }

    public renewGLSquads(): FarmCategory {
        this.farmGLShips = new FarmCategory(
            'GL squads', [
                new Farm(
                    'Jedi Master Kenobi',
                    'event',
                    'light',
                    [
                        new FarmUnit('Jedi Master Kenobi', 7, 13, 8),
                        new FarmUnit('Commander Ahsoka Tano', 7,13,5),
                        new FarmUnit('General Kenobi', 7,13,8),
                        new FarmUnit('General Skywalker', 7,13,8),
                        new FarmUnit('Ahsoka Tano', 7,13,5),                      
                    ],
                    [],null,false,false
                ),
                new Farm(
                    'Jedi Master Luke Skywalker',
                    'event',
                    'light',
                    [
                        new FarmUnit('Jedi Master Luke Skywalker', 7, 13, 8),
                        new FarmUnit('Jedi Knight Luke Skywalker', 7,13,7),
                        new FarmUnit('Hermit Yoda', 7,13,5),
                        new FarmUnit('Jedi Knight Revan', 7,13,5),
                        new FarmUnit('General Skywalker', 7,13,8),
                     ],
                    [],null,false,false
                ),
                new Farm(
                    'Supreme Leader Kylo Ren',
                    'event',
                    'light',
                    [
                        new FarmUnit('Supreme Leader Kylo Ren', 7, 13, 8),
                        new FarmUnit('General Hux', 7,13,5),
                        new FarmUnit('Kylo Ren (Unmasked)', 7,13,7),
                        new FarmUnit('Sith Trooper', 7,13,5),
                        new FarmUnit('First Order Stormtrooper', 7,13,5),
                     ],
                    [],null,false,false
                ),
                new Farm(
                    'Jabba the Hutt',
                    'event',
                    'light',
                    [
                        new FarmUnit('Jabba the Hutt', 7, 13, 8),
                        new FarmUnit('Krrsantan', 7,13,5),
                        new FarmUnit('Skiff Guard (Lando Calrissian)', 7, 13, 5),
                        new FarmUnit('Boushh (Leia Organa)', 7, 13, 5),
                        new FarmUnit('Embo', 7,13,5),                        
                    ],
                    [],null,false,false
                ),
                new Farm(
                    'Rey',
                    'event',
                    'light',
                    [
                        new FarmUnit('Rey', 7, 13, 8),
                        new FarmUnit('Ben Solo', 7,13,5),
                        new FarmUnit('Resistance Hero Finn', 7,13,5),
                        new FarmUnit('Resistance Hero Poe', 7,13,5),
                        new FarmUnit('Rey (Jedi Training)', 7,13,7),
                    ],
                    [],null,false,false
                ),
                new Farm(
                    'Sith Eternal Emperor',
                    'event',
                    'light',
                    [
                        new FarmUnit('Sith Eternal Emperor', 7, 13, 8),
                        new FarmUnit('Wat Tambor', 7,13,7),
                    ],
                    [],null,false,false
                ),
                new Farm(
                    'Lord Vader',
                    'event',
                    'light',
                    [
                        new FarmUnit('Lord Vader', 7, 13, 8),
                        new FarmUnit('Admiral Piett', 7, 13, 8),
                        new FarmUnit('Maul', 7, 13, 5),
                        new FarmUnit('Darth Vader', 7, 13, 7),
                        new FarmUnit('Royal Guard', 7, 13, 5),
                    ],
                    [],null,false,false
                ),
                ]
        );
        return this.farmGLShips;
    }

    public renewTWSquads(): FarmCategory {
        this.farmTWSquads = new FarmCategory(
            'Territory war squads', [
                new Farm(
                    'Geonosians',
                    'event',
                    'light',
                    [
                        new FarmUnit('Geonosian Brood Alpha', 7,13,5),
                        new FarmUnit('Geonosian Soldier', 7,13,5),
                        new FarmUnit('Geonosian Spy', 7,13,5),
                        new FarmUnit('Poggle the Lesser', 7,13,5),
                        new FarmUnit('Sun Fac', 7,13,5),
                      
                    ],
                    [],null,false,false
                ),  
                new Farm(
                    'Padme',
                    'event',
                    'light',
                    [
                        new FarmUnit('Padmé Amidala', 7,13,8),
                        new FarmUnit('C-3PO', 7, 13, 7),
                        new FarmUnit('Mace Windu', 7,13,5),
                        new FarmUnit('Jedi Knight Anakin', 7, 13, 7),
                        new FarmUnit('Ahsoka Tano', 7, 13, 5),
                      
                    ],
                    [],null,false,false
                ),
                new Farm(
                    'GG Separatists',
                    'event',
                    'light',
                    [
                        new FarmUnit('General Grievous', 7,13,7),
                        new FarmUnit('B1 Battle Droid', 7, 13, 5),
                        new FarmUnit('Droideka', 7,13,5),
                        new FarmUnit('IG-100 MagnaGuard', 7, 13, 5),
                        new FarmUnit('B2 Super Battle Droid', 7, 13, 5),
                      
                    ],
                    [],null,false,false
                ),
                new Farm(
                    'Empire',
                    'event',
                    'light',
                    [
                        new FarmUnit('Emperor Palpatine', 7, 13, 7),
                        new FarmUnit('Darth Vader', 7, 13, 7),
                        new FarmUnit('Mara Jade, The Emperor\'s Hand', 7, 13, 5),
                        new FarmUnit('Grand Admiral Thrawn', 7, 13, 6),
                        new FarmUnit('Royal Guard', 7, 13, 5),
                      
                    ],
                    [],null,false,false
                ),
                new Farm(
                    'Phasma',
                    'event',
                    'light',
                    [
                        new FarmUnit('Captain Phasma', 7, 13, 5),
                        new FarmUnit('Kylo Ren', 7, 13, 7),
                        new FarmUnit('First Order Officer', 7, 13, 5),
                        new FarmUnit('First Order Executioner', 7, 13, 5),
                        new FarmUnit('First Order TIE Pilot', 7, 13, 5),
                    ],
                    [],null,false,false
                ),                
                new Farm(
                    'Bounty Hunters',
                    'event',
                    'light',
                    [
                        new FarmUnit('Boba Fett, Scion of Jango', 7, 13, 5),
                        new FarmUnit('Bossk', 7, 13, 5),
                        new FarmUnit('Jango Fett', 7, 13, 7),
                        new FarmUnit('Embo', 7, 13, 5),
                        new FarmUnit('Cad Bane', 7, 13, 5),
                        new FarmUnit('Boba Fett', 7, 13, 8),
                        new FarmUnit('IG-88', 7, 13, 5),
                        new FarmUnit('Dengar', 7, 13, 5),
                        new FarmUnit('Zam Wesell', 7, 13, 7),
                    ],
                    [],null,false,false
                ),                
                new Farm(
                    'Nightsisters Base',
                    'event',
                    'light',
                    [
                        new FarmUnit('Mother Talzin', 7, 13, 5),
                        new FarmUnit('Asajj Ventress', 7, 13, 5),
                        new FarmUnit('Old Daka', 7, 13, 5),
                        new FarmUnit('Nightsister Zombie', 7, 13, 5),
                    ],
                    [],null,false,false
                ),                

            ]
        );
        return this.farmTWSquads;
    }


    public renewTBSquads(): FarmCategory {
        this.farmTBSquads = new FarmCategory(
            'Territory war squads', [
                new Farm(
                    'Geonosians',
                    'event',
                    'light',
                    [
                        new FarmUnit('Geonosian Brood Alpha', 7,13,5),
                        new FarmUnit('Geonosian Soldier', 7,13,5),
                        new FarmUnit('Geonosian Spy', 7,13,5),
                        new FarmUnit('Poggle the Lesser', 7,13,5),
                        new FarmUnit('Sun Fac', 7,13,5),
                      
                    ],
                    [],null,false,false
                ),
            ]
        );
        return this.farmTBSquads;
    }

    public renewLow(): FarmCategory {
        this.farmLow = new FarmCategory(
            'Low', [
                new Farm(
                    'Ship gls',
                    'event',
                    'dark',

                    [], [
                    new FarmUnit('Executor', 7),
 

                ],
                ),
            ]
        );
        return this.farmLow;
    }


    public renewMedium(): FarmCategory {
        this.farmMedium = new FarmCategory(
            'Medium', [
            new Farm(
                'Galactic legends',
                'event',
                'dark',
                [
                    new FarmUnit('Jedi Master Kenobi', 7, 13, 8),
                    new FarmUnit('Jedi Master Luke Skywalker', 7, 13, 8),
                ],
                [],
                null, false, false
            ),
        ]
        );
        return this.farmMedium;
    }

    public renewHigh(): FarmCategory {
        this.farmHigh = new FarmCategory(
            'High',
            [
                new Farm(
                    'Galactic legends',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Jedi Master Kenobi', 7, 13, 8),
                        new FarmUnit('Jedi Master Luke Skywalker', 7, 13, 8),
                        new FarmUnit('Supreme Leader Kylo Ren', 7, 13, 8),
                        new FarmUnit('Jabba the Hutt', 7, 13, 8),
                        new FarmUnit('Rey', 7, 13, 8),
                        new FarmUnit('Sith Eternal Emperor', 7, 13, 8),
                        new FarmUnit('Lord Vader', 7, 13, 8),
                    ],
                    [],
                    null, false, false
                ),

                new Farm(
                    'Ship gls',
                    'event',
                    'dark',

                    [], [
                    new FarmUnit('Executor', 7),
                    new FarmUnit('Profundity', 7),


                ],
                    null, false, false
                )
            ]
        )


        return this.farmHigh;
    }
}
