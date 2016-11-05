import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';


import {PageService} from '../page.service';
import {Page} from "../page";

@Component({
    selector: 'page-form',
    templateUrl: './page-form.component.html',


    // template: `<div class="medium-3 columns">
    //                 <page-list></page-list>
    //             </div>
    //             <div class="medium-9 columns">
    //                 <div class="row">
    //                     <div class="medium-12 columns"><h1>Page form</h1></div>
    //                 </div>
    //                 <form action="">
    //                     <div class="row">
    //                         <div class="medium-12 columns"><label>Name<input type="text" value="{{page.name}}"
    //                                                                          placeholder="name"/></label></div>
    //                         <div class="medium-12 columns"><label>Parent_id<input type="text" value="{{page.parent_id}}"
    //                                                                               placeholder="parent_id"/></label></div>
    //                         <div class="medium-12 columns"><label>Order<input type="text" value="{{page.order}}"
    //                                                                           placeholder="order"/></label></div>
    //                         <div class="medium-12 columns"><label>Created<input type="text" value="{{page.created}}"
    //                                                                             placeholder="created"/></label></div>
    //                         <div class="medium-12 columns"><input id="checkbox1" type="checkbox" value="{{page.is_deleted}}"/><label
    //                                 for="checkbox1">Is deleted (is_deleted)</label></div>
    //                         <div class="medium-12 columns"><input id="checkbox2" type="checkbox" value="{{page.is_visible}}"/><label
    //                                 for="checkbox2">Is visible (is_visible)</label></div>
    //                         <div class="medium-12 columns">
    //                             <button class="button" (click)="onSubmitClick()">Submit</button>
    //                         </div>
    //                     </div>
    //                 </form>
    //             </div>`
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
