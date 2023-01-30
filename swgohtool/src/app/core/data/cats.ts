import { FarmCategory } from "../classes/cls-frm"
import { flatten, forEach, map } from 'lodash'
import events, { EventsCls } from './evnt'
import legends, { Gls } from './gls'

export  class categories {
    legends = new Gls().renew();
    events = new EventsCls().renew();
    player:any;

    renew(){
        this.legends = new Gls().renew();
        this.events = new EventsCls().renew();
        this.player = null;
    }
}

/*export const flat_categories = [
    new FarmCategory(
        'Flat',
        flatten(map(categories, 'farms'))
    )
]*/
