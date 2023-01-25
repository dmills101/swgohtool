import { FarmCategory } from "../classes/cls-frm"
import { flatten, forEach, map } from 'lodash'
import events from './evnt'
import legends from './gls'

export  class categories {
    legends = legends;
    events = events;
    player:any;
}

/*export const flat_categories = [
    new FarmCategory(
        'Flat',
        flatten(map(categories, 'farms'))
    )
]*/
