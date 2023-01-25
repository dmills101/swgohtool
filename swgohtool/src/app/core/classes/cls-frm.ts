export class Farm {
    name: string
    type: string
    side: string
    units: FarmUnit[]
    ships: FarmUnit[]

    constructor(name: string, type: string, side: string, units: FarmUnit[], ships: FarmUnit[]) {
        this.name = name
        this.side = side
        this.units = units
        this.ships = ships
        this.type = type;
    }
}

export class FarmUnit {
    name: string
    stars: number
    gear_level?: number
    relic_level?: number

    constructor(name: string, stars: number, gear_level?: number, relic_level?: number) {
        this.name = name
        this.stars = stars
        this.gear_level = gear_level
        this.relic_level = relic_level
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