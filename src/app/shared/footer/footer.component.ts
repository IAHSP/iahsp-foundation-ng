import { Component, OnInit } from '@angular/core';
import { constStrImages } from "../data/globals";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  strImages: string = constStrImages;

  constructor() { }

  ngOnInit() {
  }

}
