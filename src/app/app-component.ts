import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: ['.active { font-weight: bold; }'],
    template: `
<ul class="nav nav-pills">
    <li role="presentation"><a routerLink="home"  routerLinkActive="active">Home</a></li>
    <li role="presentation"><a routerLink="login"  routerLinkActive="active">Login</a></li>
    <li role="presentation"><a routerLink="counter"  routerLinkActive="active">Counter</a></li>
    <li role="presentation"><a routerLink="items-list"  routerLinkActive="active">List of Items</a></li>
</ul>

<div class="page-header"><h4>{{header}}</h4></div>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent { }
