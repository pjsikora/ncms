import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';


import {PageService} from './page.service';
import {ContentService} from '../content/content.service';
import {Page} from "./page";

@Component({
    selector: 'page-form',
    template: `<div class="medium-3 columns">
                <page-list></page-list>
            </div>
            <div class="medium-9 columns">
                <h1>Page details</h1>
                <p>{{page.name}}</p>
                
                <p>
                        <strong>_id: </strong>5809b45863afbb80a6509377
                        <br>
                        <strong>_created: </strong>{{page._created}}
                        <br>
                        <strong>is_deleted: </strong>{{page.is_deleted}}
                        <br>
                        <strong>is_visible: </strong>{{page.is_visible}}
                        <br>
                        <strong>name: </strong>{{page.name}}
                        <br>
                        <strong>order: </strong>{{page.oreder}}
                        <br>
                        <strong>parent_id: </strong>{{page.parent_id}}
                        <br>
                        <strong>slug: {{page.slug}}</strong>
                        <br>
                        <strong>page_keywords: {{page.page_keywords}}</strong>
                        <br>
                        <strong>page_description: {{page.page_description}}</strong>
                        <br>
                        <br>
                        <strong><a href="/{{page.slug}}/" target="blank">Go to page by slug</a></strong>
                        <br>
                        <strong><a href="/pageid/{{page._id}}" target="blank">Go to page by id</a></strong>
                        <br>
                </p>
                
                <section *ngFor="let content of contents">{{content.name}}</section>
            </div>

        `,
})

export class PageDetailsComponent implements OnInit {
    page:Page;
    contents = [];

    constructor(private pageService: PageService,
                private contentService: ContentService,
                private route: ActivatedRoute,
                private location: Location) {
    }


    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['_id'];
            this.page._id = id;
            // let id = +params['_id'];
            console.log(id);

            // this.contentService.getContentsOfPage(id)
            //     .then(response => {
            //         console.log(response);
            //         this.contents = response;
            //     })
        });
    }
}