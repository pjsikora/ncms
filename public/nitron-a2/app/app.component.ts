import {Component} from '@angular/core';

// import {PageListComponent} from './page/pagelist.component';

@Component({
    selector: 'my-app',
    template: `
        <section class="app_header">Nitron</section>
        <section class="app_keeper">
        <router-outlet></router-outlet>
        </section>
    `,


})

export class AppComponent {

}