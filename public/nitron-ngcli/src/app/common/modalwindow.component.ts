import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'modal-window',
  template: `<div class="modal_window">
                <div class="modal_window__inner">
                    Real content
</div>
            </div>`,
  styles: [`.modal_window { position: fixed; left: 0; top: 0; width: 100%; height: 100% }
            .modal_window__inner {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }}`]
})

export class ModalWindow implements OnInit {
  constructor() {

  }

  ngOnInit() {
  }

}
