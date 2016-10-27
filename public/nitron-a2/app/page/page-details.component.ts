import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';



import {PageService} from './page.service';
import {ContentService} from '../content/content.service';

@Component({
    selector: 'page-form',
    template: `<div class="medium-3 columns">
                <page-list></page-list>
            </div>
            <div class="medium-9 columns">
                <h1>Page details</h1>
                <p>{{page.name}}</p>
                
                <section *ngFor="let content of contents">{{content.name}}</section>
            </div>

        `,
})

export class PageDetailsComponent implements OnInit {
    page = {name: 'ding'}
    contents = [];

    constructor(private pageService: PageService,
                private contentService: ContentService,
                private route: ActivatedRoute,
                private location: Location) {
    }


    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['_id'];
            this.page.name = id;
            // let id = +params['_id'];
            console.log(id);

            this.contentService.getContentsOfPage(id)
                .then(response => {
                    console.log(response);
                    this.contents = response;
                })

            // this.heroService.getHero(id)
            //     .then(hero => this.hero = hero);
        });
        // this.getPages();
    }
}