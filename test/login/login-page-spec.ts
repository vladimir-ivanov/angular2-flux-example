import {
    beforeEachProviders,
    inject,
    injectAsync,
    fakeAsync,
    TestComponentBuilder,
    tick
} from 'angular2/testing';
import { Component, provide} from 'angular2/angular2';

import { LoginPage } from './../../src/login/login-page.ts';

describe('LoginPageComponent', () => {
    it('should fail', () => {
        expect(LoginPage).toEqual(false);
    });
});