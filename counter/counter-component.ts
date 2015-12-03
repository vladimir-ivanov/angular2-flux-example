import {Component, Inject} from 'angular2/angular2';
import {CounterActions} from './counter-actions';

@Component({
    selector: 'counter',
    providers: [CounterActions],
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

    constructor(@Inject(CounterActions)counterActions:CounterActions) {
        this.counterActions = counterActions;
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
