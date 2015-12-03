/// <reference path="./../typings/redux/redux.d.ts" />
/// <reference path="./../typings/redux-thunk/redux-thunk.d.ts" />
import {createStore, applyMiddleware, compose} from 'redux';
const thunk = require('redux-thunk');
import reducer from '../reducers/index';
const devTools = require('redux-devTools').devTools;

const finalCreateStore = compose(
    applyMiddleware(thunk),
    devTools()
)(createStore);

export default () => {
    return finalCreateStore(reducer);
}