import {Component, Inject} from 'angular2/angular2';
import {CounterActions} from './counter-actions';
import {CounterStore} from "./counter-store";

@Component({
    selector: 'counter',
    providers: [CounterActions, CounterStore],
    template: `
    <h4>Flux Example</h4>
  <p>
    Counter: {{ counter }}
    <button (click)="increment()" class="btn btn-default btn-xs">+</button>
    <button (click)="decrement()" class="btn btn-default btn-xs">-</button>
    <button (click)="reset()" class="btn btn-default  btn-xs">Reset</button>
  </p>
  `
})
export class Counter {
    counter:number = 0;

    private counterActions;
    private counterStore;

    constructor(@Inject(CounterActions)counterActions:CounterActions,
                @Inject(CounterStore)counterStore:CounterStore) {
        this.counterActions = counterActions;
        this.counterStore = counterStore;
        this.counterStore.subscribe(() => this.counter = this.counterStore.getCounter());
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
