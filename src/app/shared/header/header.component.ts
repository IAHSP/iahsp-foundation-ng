import { Component, OnInit } from '@angular/core';
import { constStrImages } from "../data/globals";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  strImages: string = constStrImages;

  constructor() { }

  ngOnInit() {
  }

}
