import {EventEmitter} from 'angular2/angular2';
import {UPDATE_COUNTER} from './counter-actions';
import dispatcher from '../dispatcher';

declare interface Payload {
    type: string;
    data: any
}

export class CounterStore extends EventEmitter<string> {
    private counter = 0;

    constructor() {
        super();
        dispatcher.register((payload:Payload) => {
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
