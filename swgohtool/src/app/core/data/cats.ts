import { FarmCategory } from "../classes/cls-frm"
import { flatten, forEach, map } from 'lodash'
import events from './evnt'
import legends from './gls'

export const categories = [
    legends,
    events,
]

export const flat_categories = [
    new FarmCategory(
        'Flat',
        flatten(map(categories, 'farms'))
    )
]
