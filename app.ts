import { Component, bootstrap, View , ChangeDetectionStrategy, bind,
    FormBuilder, Validators, ControlGroup} from "angular2/angular2";
/// <reference path="typings/redux/redux.d.ts" />
/// <reference path="typings/redux/redux-thunk.d.ts" />

import {createStore, applyMiddleware, compose} from 'redux';
const thunk = require('redux-thunk');

import {provider} from  "ng2-redux";


console.log(applyMiddleware);
console.log(thunk);
console.log(provider);
//import {rootReducer} from './reducers';

import {LoginPage} from "./forms/login-page";
//import createStore = Redux.createStore;


@Component({
    selector: 'forms-demo-app',
    changeDetection:ChangeDetectionStrategy.CheckAlways,
    directives: <Array<any>>[LoginPage],
    template: `
  <div>
    <login-page></login-page>
  </div>
  `
})
class FormsDemoApp {
}

bootstrap(FormsDemoApp);
