import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, Subject } from "rxjs";
import { User } from "../shared/user.model";
const APIKEY = "AIzaSyDKU7VQH5EQ7uYrAefplNjXphP5SKMLy6U";
const SIGN_UP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
const SIGN_IN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
interface AuthInterface {
  email: string;
  localId: string;
  idToken: string;
  expiresIn: number;
}
@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  userSubject = new Subject<User>();
  signUp(email: string, password: string) {
    return this.httpClient
      .post(SIGN_UP, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handlerError),
        tap((resData: AuthInterface) => {
          this.handlerAuth(
            resData.email,
            resData.localId,
            resData.idToken,
            resData.expiresIn
          );
        })
      );
  }

  handlerAuth(
    email: string,
    localId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, localId, token, expirationDate);
    this.userSubject.next(user);
  }

  signIn(email: string, password: string) {
    return this.httpClient
      .post(SIGN_IN, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handlerError),
        tap((resData: AuthInterface) => {
          this.handlerAuth(
            resData.email,
            resData.localId,
            resData.idToken,
            resData.expiresIn
          );
        })
      );
  }

  private handlerError(error: HttpErrorResponse) {
    let errorMessage = "An unknown error ocurred!";
    switch (error.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "The email already exist";
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = "The email do not exist";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "Invalid Password";
        break;
      case "USER_DISABLED":
        errorMessage = "Usuario deshabilitado";
        break;
    }
    return throwError(errorMessage);
  }
}
