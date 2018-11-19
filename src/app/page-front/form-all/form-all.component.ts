import { Component, OnInit, Input } from '@angular/core';
import { Form }    from './form';

@Component({
  selector: 'app-form-all',
  templateUrl: './form-all.component.html',
  styleUrls: ['./form-all.component.scss']
})
export class FormAllComponent implements OnInit {

  chapters = [
    "Greater Good",
    "California - IAHSP Southern California (Accepts Remote ASP Members)",
    "California - NorCal (Accepts Remote ASP Members)",
    "Canada - Toronto (Accepts Remote ASP Members)",
    "Colorado - Denver (Accepts Remote ASP Members)",
    "Florida - South Florida",
    "Georgia - Atlanta",
    "Illinois - Greater Chicago (Accepts Remote ASP Members)",
    "Massachusetts - Boston (Accepts Remote ASP Members)",
    "Minnesota (Accepts Remote ASP Members)",
    "North Carolina - Charlotte (Accepts Remote ASP Members)",
    "Texas - Austin (Accepts Remote ASP Members)",
    "Texas - Houston",
    "Texas - San Antonio",
    "Washington DC (Accepts Remote ASP Members)",
    "Wisconsin - SE Wisconsin (Accepts Remote ASP Members)"
  ];

  model = new Form("", "", "", "", "", "", "", "", "", "", 0, "");

  submitted = false;

  onSubmit() { this.submitted = true; }

  newForm() {
    this.model = new Form("firstname", "lastname", "email", "address", "city", "state", "zip", "phone", "country", "chapter", 100.00, "message");
  }


  @Input()
    formtype;

  constructor() {}

  ngOnInit() {
  }

}
