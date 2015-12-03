import {Component, Inject} from 'angular2/angular2';
import {CounterActions} from './counter-actions';
import {CounterStore} from "./counter-store";

@Component({
    selector: 'counter',
    providers: [CounterActions, CounterStore],
    template: `
  <p>
    Clicked: {{ counter }} times
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
    <button (click)="incrementIfOdd()">Increment if odd</button>
    <button (click)="incrementAsync()">Increment async</button>
  </p>
  `
})
export class Counter {
    private counterActions;
    private counterStore;

    constructor(
        @Inject(CounterActions)counterActions:CounterActions,
        @Inject(CounterStore)counterStore:CounterStore
    ) {
        this.counterActions = counterActions;
        this.counterStore = counterStore;
       // this.counterStore.

    }

    increment() {
        this.counterActions.increment();
    }

    decrement() {
        this.counterActions.decrement();
    }

    incrementIfOdd() {
        this.counterActions.incrementIfOdd();
    }

    incrementAsync() {
        this.counterActions.incrementAsync(1000);
    }
}
