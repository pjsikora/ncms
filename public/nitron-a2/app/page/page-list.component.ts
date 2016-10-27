import {Component, OnInit} from '@angular/core';

import {PageService} from './page.service';

@Component({
    selector: 'page-list',
    template: `<h1>Page list</h1>
        <ul>
                <page-list-item *ngFor="let page of pages" [page]="page"></page-list-item>
        </ul>`,
})

export class PageListComponent implements OnInit {
    // pages = [{
    //     _id: 'id of page',
    //     name: 'name of page',
    //     parent_id: 'parent id of page',
    //     order: '2',
    //     created: 'created of page',
    //     is_deleted: 'false',
    //     is_visible: 'false',
    // }, {
    //     _id: 'id of page',
    //     name: 'name of page 2',
    //     parent_id: 'parent id of page',
    //     order: '2',
    //     created: 'created of page',
    //     is_deleted: 'false',
    //     is_visible: 'false',
    // }]
    pages = []

    constructor(private pageService: PageService) {
        console.log(this.pages);
    }

    getPages(): void {
        this.pageService
            .getPages()
            .then(response => {
                this.pages = response.json().content;
                console.log("data")
                console.log(response.json().content)
            });
    }

    ngOnInit(): void {
        this.getPages();
    }
}