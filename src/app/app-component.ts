import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<ul class="nav nav-pills">
    <li role="presentation"><a routerLink="home">Home</a></li>
    <li role="presentation"><a routerLink="login">Login</a></li>
    <li role="presentation"><a routerLink="counter">Counter</a></li>
    <li role="presentation"><a routerLink="items-list">List of Items</a></li>
</ul>

<div class="page-header"><h4>{{header}}</h4></div>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent { }
