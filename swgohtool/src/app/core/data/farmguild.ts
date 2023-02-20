import { Farm, FarmCategory, FarmUnit } from "../classes/cls-frm";

export class Farmguild {
    public farmHigh: FarmCategory | undefined;
    public farmMedium: FarmCategory | undefined;
    public farmLow: FarmCategory | undefined;

    public constructor() {
        this.renewHigh();
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
