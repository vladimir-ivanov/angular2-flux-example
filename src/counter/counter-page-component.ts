import {Component, Inject, OnInit, OnDestroy} from "angular2/core";
import {CounterActions} from "./counter-actions";

import {CounterStore} from "./counter-store";

@Component({
    selector: "counter",
    providers: [CounterActions, CounterStore],
    templateUrl: "./src/counter/counter.html"
})
export class CounterPageComponent implements OnInit, OnDestroy {
    counter:number = 0;

    private counterActions;
    private counterStore;

    constructor(@Inject(CounterActions)counterActions:CounterActions,
                @Inject(CounterStore)counterStore:CounterStore) {
        this.counterActions = counterActions;
        this.counterStore = counterStore;
    }

    ngOnInit() {
        this.counter = this.counterStore.getCounter();
        this.counterStore.subscribe(() => this.counter = this.counterStore.getCounter());
    }

    ngOnDestroy() {
    }

    increment() {
        this.counterActions.increment();
    }

    decrement() {
        this.counterActions.decrement();
    }

    reset() {
        this.counterActions.reset();
    }
}
