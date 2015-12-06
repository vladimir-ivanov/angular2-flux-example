import {BrowserDomAdapter} from 'angular2/src/platform/browser/browser_adapter';
BrowserDomAdapter.makeCurrent();

import {
    beforeEachProviders,
    beforeEach,
    afterEach,
    inject,
    it,
    describe,
    TestComponentBuilder
} from 'angular2/testing';
import { Component, FormBuilder} from 'angular2/angular2';

import { LoginPage } from './../../src/login/login-page.ts';

let service:any;
let formBuilder:FormBuilder;

describe('LoginPageComponent', () => {
    beforeEachProviders(() => [FormBuilder]);

    beforeEach(inject([FormBuilder], fb => {
        formBuilder = fb;

        spyOn(formBuilder, 'group').and.returnValue('form builder value');
    }));

    beforeEach(inject([TestComponentBuilder], tcb => {
        tcb.overrideTemplate(LoginPage, '<div></div>').createAsync(LoginPage).then(f => {
            service = f.componentInstance;
        });
    }));

    it('should initialize correctly its properties', () => {
        expect(service.model).toEqual({email: 'x@yahoo.com', password: ''});
        expect(service.loginForm).toEqual('form builder value');

        let formBulderGroupArgs = (<any>formBuilder.group).calls.argsFor(0)[0];

        expect(formBulderGroupArgs.email.length).toEqual(2);
        expect(formBulderGroupArgs.email[0]).toEqual('');
        expect(typeof formBulderGroupArgs.email[1]).toEqual('function');
        expect(formBulderGroupArgs.password.length).toEqual(2);
        expect(formBulderGroupArgs.password[0]).toEqual('');
        expect(typeof formBulderGroupArgs.password[1]).toEqual('function');
    });

    describe('doLogin()', () => {
        it('should call event.preventDefault()', () => {
            var event = {
                preventDefault: () => {}
            };

            spyOn(event, 'preventDefault');
            service.doLogin(event);

            expect((<any>event.preventDefault).calls.count()).toEqual(1);
        });
    });
});