import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';

import {PageService} from './page.service';

@Component({
    selector: 'page-form',
    template: `
            <div class="medium-3 columns">
                <page-list></page-list>
            </div>
            <div class="medium-9 columns">
                <h1>Page form</h1>
                <input value="{{page.name}}" placeholder="name">
            </div>
        `,
})

export class PageFormComponent implements OnInit {
    page = {name: 'ding'}

    constructor(private pageService: PageService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            console.log('params')
            console.log(params)
            this.page.name = params['_id'];
            let id = +params['id'];
        });
    }
}