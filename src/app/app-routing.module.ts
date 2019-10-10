import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFrontComponent } from './page-front/page-front.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';

const routes: Routes = [
  { path: '', component: PageFrontComponent },
  { path: 'success-payment', component: SuccessPaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
