import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';


import {PageService} from '../page.service';
import {Page} from "../page";

@Component({
    selector: 'page-form',
    templateUrl: 'page-form.component.html',
})

export class PageFormComponent implements OnInit {
    page: Page;

    constructor(private pageService: PageService,
                private route: ActivatedRoute,
                private location: Location) {
    }


    onSubmitClick() {
        this.page = new Page();
        console.log(this.page.is_deleted);
        console.log(this.page.is_visible);
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