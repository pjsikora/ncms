import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

// import {TranslateModule, TranslateService} from 'ng2-translate';

// App
import {AppComponent}   from './app.component';

// Pages
import {
  PageService,
  PageFormComponent,
  PageListComponent,
  PageListItemComponent,
  PageDetailsComponent
} from './page/index';

// Contents
import {
  ContentService,
  ContentFormComponent
} from "./content/index";

//
// import { TRANSLATION_PROVIDERS,
//     TranslatePipe,
//     TranslateService }   from './l18n/index';

// Router
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule

    // TranslateModule.forRoot({
    // })
  ],
  declarations: [
    AppComponent,

    PageListComponent,
    PageListItemComponent,
    PageFormComponent,
    PageDetailsComponent,

    ContentFormComponent,

    // TranslatePipe
  ],
  bootstrap: [AppComponent],
  providers: [
    PageService,
    ContentService,

    // TRANSLATION_PROVIDERS,
    // TranslateService
  ]
})

export class AppModule {
  constructor(// translate: TranslateService
  ) {
    // translate.setDefaultLang('en');
    // translate.use('en');
  }
}
