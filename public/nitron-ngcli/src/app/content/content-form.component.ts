import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';

import {ContentService} from './content.service';

@Component({
    selector: 'page-form',
    template: `<h1>Page form</h1>
        <form action="">
            <div class="row">
                <div class="medium-12 columns">
                    <label for="">Name
                        <input type="text" value="{{page.name}}" placeholder="name">
                    </label>
                </div>
            </div>
        
        </form>
        
        `,
})

export class ContentFormComponent implements OnInit {
    page = {name: 'ding'}

    constructor(private contentService: ContentService,
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