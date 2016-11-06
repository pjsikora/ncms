import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<section class="app_header">
                <div class="medium-12 columns">Nitron </div>
            </section>`,
  styles: ['.app_header { background: #000; color: #fff; }']
})

export class HeaderComponent implements OnInit {
  constructor(
    // private _translate: TranslateService
  ) {

  }
  ngOnInit() {
    // this._translate.use('pl');
  }

}
