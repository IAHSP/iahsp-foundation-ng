import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ReCaptchaModule } from 'angular2-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule, ModalModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageFrontComponent } from './page-front/page-front.component';
import { FormAllComponent } from './page-front/form-all/form-all.component';
import { StaticModalComponent } from './page-front/static-modal/static-modal.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageFrontComponent,
    FormAllComponent,
    StaticModalComponent,
    SuccessPaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    AngularFontAwesomeModule,
    HttpClientModule,
    ReCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
