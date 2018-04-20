import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServices {

  constructor(private http: HttpClient) {

  }

  public signIn(email, password): Observable<any> {
    return this.http
    .post('https://backend-everis.herokuapp.com/api/ingresar-usuario', { email: email, password: password }, { observe: 'response' })
    .map((response) => {
      return response;
    });
  }

}