import {EventEmitter} from 'angular2/angular2';
import {UPDATE_COUNTER} from './counter-actions';
import dispatcher from '../dispatcher';

export class CounterStore extends EventEmitter<string> {
    private counter = 0;

    constructor() {
        super();
        dispatcher.register(payload => {
            switch (payload.type) {
                case UPDATE_COUNTER:
                    this.counter = payload.data;
                    break;
            }

            this.emit('changed');
        });
    }

    getCounter() {
        return this.counter;
    }
}
