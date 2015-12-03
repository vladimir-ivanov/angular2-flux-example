import {UPDATE_COUNTER} from './counter-actions';
import dispatcher from '../dispatcher';

export class CounterStore {
    counter = 0;

    constructor() {
        dispatcher.register(payload => {
           console.log(payload);
        });
    }
}
