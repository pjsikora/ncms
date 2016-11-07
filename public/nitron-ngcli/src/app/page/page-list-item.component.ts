import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Page} from './page';
import {Router} from '@angular/router';

@Component({
  selector: 'page-list-item',
  template: `<li><span (click)="onClickShowDetails()">{{page.name}}</span>
                    <span class="fa fa-pencil" (click)="onClickEdit()"></span>
                    <span class="fa fa-trash-o"(click)="onClickRemove()"></span>
                    <span class="fa fa-trash" (click)="onClickRmoveHard()"></span>
                    <span class="fa fa-plus" (click)="onClickAddChild()"></span>
                    <span class="fa fa-plus-square-o" (click)="onClickAddContent()"></span>
                        <ul></ul>
                    </li>`,
})

export class PageListItemComponent {
  @Input()
  page: Page;

  @Output() addChild: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() removeHard: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() addContent: EventEmitter<any> = new EventEmitter();


  constructor(private router: Router) {
    console.log(this.page);
  }

  onClickShowDetails() {
    let link = ['/page/details/', this.page._id];
    this.router.navigate(link);
  }

  onClickEdit() {
    console.log('edit');
    let link = ['/page/form/edit/', this.page._id];
    this.router.navigate(link);
    this.edit.emit(this.page);
  }

  onClickRemove() {
    console.log('delete');
    this.addContent.emit(null);
  }

  onClickRmoveHard() {
    console.log('deleteHard');
    this.removeHard.emit(null);
  }

  onClickAddChild() {
    console.log('onClickAddChild');
    this.addChild.emit(null);
  }

  onClickAddContent() {
    console.log('addContent');
    this.addContent.emit(null);
  }

}
