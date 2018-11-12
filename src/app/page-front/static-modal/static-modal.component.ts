import { Component, OnInit } from '@angular/core';
//import { ModalModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-static-modal',
  templateUrl: './static-modal.component.html',
  styleUrls: ['./static-modal.component.scss']
})
export class StaticModalComponent implements OnInit {
  
  public openModalWithComponent() {
    /* this is how we open a Modal Component from another component */
    //this.bsModalRef = this.modalService.show(ModalContentComponent);
    staticModalCreditCard.show();
  }

  constructor() { }


  ngOnInit() {
  }

}

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.scss']
})
export class ModalButtonComponent implements OnInit {
  
  constructor() { }


  ngOnInit() {
  }

}
