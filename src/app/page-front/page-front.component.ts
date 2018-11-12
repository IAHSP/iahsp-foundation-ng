import { Component, OnInit } from '@angular/core';
import { StaticModalComponent, ModalButtonComponent } from './static-modal/static-modal.component';

@Component({
  selector: 'app-page-front',
  templateUrl: './page-front.component.html',
  styleUrls: ['./page-front.component.scss']
})
export class PageFrontComponent implements OnInit {

  constructor() {
    //this.staticModalComponent = new StaticModalComponent;
  }

  ngOnInit() {
  }

}
