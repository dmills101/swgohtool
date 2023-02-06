import { EventsCls } from './evnt'
import { Gls } from './gls'
import { Eventslow } from "./eventslow";
import { Goodteams } from "./goodteams";
import { Cpit } from "./cpit";

export class categories {
    legends = new Gls().renew();
    events = new EventsCls().renew();
    eventslow = new Eventslow().renew();
    goodteams = new Goodteams().renew();
    cpit = new Cpit().renew();
    player: any;

    renew() {
        this.legends = new Gls().renew();
        this.events = new EventsCls().renew();
        this.eventslow = new Eventslow().renew();
        this.goodteams = new Goodteams().renew();
        this.cpit = new Cpit().renew();
        this.player = null;
    }
}

export class Cats {

}
