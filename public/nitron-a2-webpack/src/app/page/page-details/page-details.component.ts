import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';


import {PageService} from '../page.service';
import {ContentService} from '../../content/content.service';
import {Page} from "../page";
import {Content} from "../../content/content";

@Component({
    selector: 'page-form',
    templateUrl: 'page-details.component.html',
})

export class PageDetailsComponent implements OnInit {
    page:Page;
    contents:Array<Content> = [];

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