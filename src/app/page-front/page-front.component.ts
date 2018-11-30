import { Component, OnInit } from '@angular/core';
import { StaticModalComponent } from './static-modal/static-modal.component';

@Component({
  selector: 'app-page-front',
  templateUrl: './page-front.component.html',
  styleUrls: ['./page-front.component.scss']
})
export class PageFrontComponent implements OnInit {
  currentFormType = "";
  modalTitle = "";

  setModalText(whichForm: string) {
    switch(whichForm) { 
      case "cc": { 
        //statements; 
        this.currentFormType = whichForm;
        this.modalTitle = "Donate by Credit Card";
        break; 
      } 
      case "ck": { 
        this.currentFormType = whichForm;
        this.modalTitle = "Donate by Check";
        //statements; 
        break; 
      } 
      case "gs": { 
        //statements; 
        this.currentFormType = whichForm;
        this.modalTitle = "Donate by Goods/Services";
        break; 
      } 
    } 
  }
  constructor() {
    //this.staticModalComponent = new StaticModalComponent;
  }

  ngOnInit() {
  }

}
