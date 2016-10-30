import {Component, OnInit} from '@angular/core';
// import { TranslateService } from './l18n/index';

@Component({
    selector: 'my-app',
    template: `
        <section class="app_header">Nitron </section>
        <section class="app_keeper">
        <router-outlet></router-outlet>
        </section>
    `,


})

export class AppComponent implements OnInit {
    constructor(
        // private _translate: TranslateService
    ) {

    }
    ngOnInit() {
        // this._translate.use('pl');
    }

}