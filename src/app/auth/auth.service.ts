import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(email: string, password: string): Observable<any> {
    // firebase says ok to make this api key public and I've secured it with very low query quotas
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASDtYqy_btVVQfqwl3pZhECUJI-jPsST4',
        { email, password, returnSecureToken: true }
      )
      .pipe(
        catchError((errorResponse) => {
          return throwError(
            errorResponse.error.error.message || 'An unknown error occured'
          );
        })
      );
  }
}
