import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  formServer: String = "https://us-central1-iahsp-31959.cloudfunctions.net/iahspfoundation";

  constructor(private http: HttpClient) { }

  submitForm(formType: String, formData: String) {
    let endPoint = "";
    if (formType == "gs") {
      //Goods / Services
      endPoint = "/donate-goods";
    } else {
      //Credit and Check use the same endpoint
      endPoint = "/donate-credit";
    }
    return this.http.post(this.formServer + endPoint, formData, httpOptions);
  }
}
