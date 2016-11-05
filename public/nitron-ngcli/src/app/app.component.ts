import {Component, OnInit} from '@angular/core';
// import { TranslateService } from './l18n/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  constructor(
    // private _translate: TranslateService
  ) {

  }
  ngOnInit() {
    // this._translate.use('pl');
  }

}
