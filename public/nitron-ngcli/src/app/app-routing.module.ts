import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {PageFormComponent, PageListComponent, PageDetailsComponent} from './page/index';
// import {} from './page/page-list.component';
// import {} from "./page/page-details.component";


import {ContentFormComponent} from './content/content-form.component';


const routes: Routes = [
  {
    path: '',
    component: PageListComponent
  },
  {
    path: 'page/form/add/:parent_id',
    component: PageFormComponent
  },
  {
    path: 'page/form/edit/:_id',
    component: PageFormComponent
  },
  {
    path: 'page/details/:_id',
    component: PageDetailsComponent
  },
  {
    path: 'content/form/add',
    component: ContentFormComponent
  },
  {
    path: 'content/form/edit',
    component: ContentFormComponent
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
