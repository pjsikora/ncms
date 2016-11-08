import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';


import {PageService} from '../page.service';
import {Page} from "../page";

@Component({
  selector: 'page-form',
  templateUrl: './page-form.component.html',
})

export class PageFormComponent implements OnInit {
  page: Page;

  constructor(private pageService: PageService,
              private route: ActivatedRoute,
              private location: Location) {
    this.page = new Page();
  }


  onSubmitClick() {
    this.page = new Page();
    console.log(this.page.is_deleted);
    console.log(this.page.is_visible);
  }


  ngOnInit(): void {
    var self = this;

    this.route.params.forEach((params: Params) => {
      var pageID = this.page._id = params['_id'],
        lsPage = this.pageService.getPageFromLS(pageID);


      if (lsPage === null) {
        this.pageService.read(pageID).then(
          function (data) {
            console.log('----data----');
            var thisPage = data[0];
            self.page = thisPage;
          }
        );
      } else {
        this.page = lsPage;
      }


      let id = +params['id'];
    });
  }
}
