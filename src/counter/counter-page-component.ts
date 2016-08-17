import {Component, Inject, OnInit, OnDestroy} from "@angular/core";
import {CounterActions} from "./counter-actions.ts";
import {CounterStore} from "./counter-store.ts";

@Component({
    selector: "counter",
    providers: [CounterActions, CounterStore],
    templateUrl: "./src/counter/counter.html"
})
export class CounterPageComponent implements OnInit, OnDestroy {
    counter:number = 0;

    constructor(@Inject(CounterActions) private counterActions,
                @Inject(CounterStore) private counterStore) {
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
