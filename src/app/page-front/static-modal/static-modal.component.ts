import { Component, OnInit, ViewChild, Input } from '@angular/core';
//import { ModalModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-static-modal',
  templateUrl: './static-modal.component.html',
  styleUrls: ['./static-modal.component.scss']
})
export class StaticModalComponent implements OnInit {
  
  @Input()
    title;

  @ViewChild('staticModal') modal:any;

  showModal() {
    this.modal.show();
  }

  constructor() { }


  ngOnInit() {
  }

}
