import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';


import {PageService} from '../page.service';
import {Page} from "../page";


import {Helpers} from '../../common/helpers';

@Component({
  selector: 'page-form',
  templateUrl: './page-form.component.html',
})

export class PageFormComponent implements OnInit {
  page: Page;
  pageID: String;
  parentID: String;

  constructor(private pageService: PageService,
              private route: ActivatedRoute,
              private location: Location) {
    this.page = new Page();
  }


  onSubmitClick() {
    if (typeof this.pageID !== "undefined") {
      console.log(this.page);
      var thisPage = {};
      thisPage = this.page;

      delete thisPage.__v;
      // console.log(JSON.stringify(this.page));
      console.log(Helpers.JSON2GET(thisPage));


      this.pageService.update(Helpers.JSON2GET(thisPage)).then(function (response) {
        console.log(response);
      });
    }
    if (typeof this.parentID !== "undefined") {
    }


  }

  fetchData() {
    var self = this;

    this.pageService.read(this.pageID).then(
      function (data) {
        var thisPage = data[0];
        self.page = thisPage;
      }
    );
  }


  ngOnInit(): void {
    var self = this;

    this.route.params.forEach((params: Params) => {
      this.pageID = params['_id'];
      this.parentID = params['parentID'];

      console.log('----- Route params -----');
      console.log(this.pageID);
      console.log(this.parentID);


      var lsPage = this.pageService.getPageFromLS(this.pageID);

      if (lsPage === null) {
        this.fetchData();
      } else {
        this.page = lsPage;
      }


      let id = +params['id'];
    });
  }
}
