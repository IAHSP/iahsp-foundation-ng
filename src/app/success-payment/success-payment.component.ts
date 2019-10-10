import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-payment',
  template: `
    <div class="container">
      <div class="">
        <section class="offset-md-3 col-md-6 padding-section">
          <img src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspfoundation/iahsp-foundation-logo.jpg" alt="IAHSP Foundation Logo"
          class="mx-auto d-block img-fluid margin-bottom-32" width="360" />

          <p class="lead text-center">Your Payment is Successfull</p>
          <p class="text-center"><a routerLink="/">Return to IAHSP Foundation</a></p>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class SuccessPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
