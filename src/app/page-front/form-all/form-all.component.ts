import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { Form }    from './form';
import { DataService }    from '../../data.service';


@Component({
  selector: 'app-form-all',
  templateUrl: './form-all.component.html',
  styleUrls: ['./form-all.component.scss']
})
export class FormAllComponent implements OnInit {
  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
  objUser;

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

  model = new Form("", "", "", "", "", "", "", "", "", "", 0, "", null);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newForm() {
    this.model = new Form("firstname", "lastname", "email", "address", "city", "state", "zip", "phone", "country", "chapter", 100.00, "message", null);
  }


  @Input()
    formtype;

  constructor(private dataService: DataService) {}
  
  // Send to REST endpoint.
  mdSend() {
    // Disable submit button and indicate "Please wait...".
    document.getElementById("btnSubmit").textContent = "Please Wait...";
    document.getElementById("btnSubmit").classList.remove("btn-primary");
    document.getElementById("btnSubmit").classList.add("btn-info");
    (<HTMLInputElement> document.getElementById("btnSubmit")).disabled = true;

    // Attempt to send email.
    this.dataService.submitForm(this.formtype, this.model)
      .subscribe(response => {
        if (response["status"] === "email sent") {
          // Success
          document.getElementById("btnSubmit").textContent = "Email Sent!";
          document.getElementById("btnSubmit").classList.remove("btn-info");
          document.getElementById("btnSubmit").classList.add("btn-success");
          (<HTMLInputElement> document.getElementById("btnSubmit")).disabled = true;
        } else {
          // Something went wrong.
          document.getElementById("btnSubmit").textContent = "Please try again.";
          document.getElementById("btnSubmit").classList.remove("btn-info");
          document.getElementById("btnSubmit").classList.add("btn-danger");
          (<HTMLInputElement> document.getElementById("btnSubmit")).disabled = false;

          // Reset captcha.
          this.model.googleResponse = null;
          this.captcha.reset();
        } // else
      }) // subscribe()
    ; // sendEmailService.mdSendData()
  } // mdSend()

  // Handle the captcha response and save to objUserDetails.captchaResponse
  mdCaptchaHandle(strResponse: string): void {
    this.model.googleResponse = strResponse;
  } // mdCaptchaHandle(response)

  // Handles expired captchas.
  mdCaptchaExpired(): void {
    this.model.googleResponse = null;
    this.captcha.reset();
  }

  ngOnInit() {
  }

}
