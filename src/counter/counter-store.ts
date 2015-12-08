import {EventEmitter} from "angular2/angular2";
import {UPDATE_COUNTER, RESET_COUNTER} from "./counter-actions";
import dispatcher from "../dispatcher";

declare interface Payload {
    type: string;
    data: any;
}

const INITIAL_VALUE = 20;

export class CounterStore extends EventEmitter<string> {
    private counter = INITIAL_VALUE;

    constructor() {
        super();

        dispatcher.register((payload:Payload) => {
            switch (payload.type) {
                case UPDATE_COUNTER:
                    this.counter += payload.data;
                    break;

                case RESET_COUNTER:
                    this.counter = INITIAL_VALUE;
                    break;
                default:
                    break;
            }

            this.emit("changed");
        });
    }

    getCounter() {
        return this.counter;
    }
}
