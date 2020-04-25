import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { User } from "../shared/user.model";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { AppState } from "../store/app.store";
import * as authActions from "../auth-page/store/auth.action";
import { Store } from "@ngrx/store";

const SIGN_UP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`;
const SIGN_IN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`;
interface AuthInterface {
  email: string;
  localId: string;
  idToken: string;
  expiresIn: number;
}
@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private store: Store<AppState>
  ) {}
  logoutTimer: any;

  userSubject = new BehaviorSubject<User>(null);
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

  logout() {
    localStorage.removeItem("userData");
    this.store.dispatch(new authActions.logout());
    // this.userSubject.next(null);
    this.router.navigate(["/"]);
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
    }
    this.logoutTimer = null;
  }
  autoLogout(expirationDuration: number) {
    this.logoutTimer = setTimeout(() => {
      this.logout;
    }, expirationDuration);
  }

  handlerAuth(
    email: string,
    localId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, localId, token, expirationDate);
    // this.userSubject.next(user);
    this.store.dispatch(
      new authActions.login({
        email: email,
        localId: localId,
        idToken: token,
        expiresIn: expiresIn,
      })
    );
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem("userData", JSON.stringify(user));
    this.router.navigate(["./recipe"]);
  }

  autoLogin() {
    const userData = localStorage.getItem("userData");
    const user: {
      name: string;
      password: string;
      _token: string;
      _tokenExpirationData: Date;
    } = JSON.parse(userData);
    const _tokenExpirationData =
      new Date(user._tokenExpirationData).getTime() - new Date().getTime();
    if (userData) {
      this.userSubject.next(new User(user.name,user.password,user._token, user._tokenExpirationData));
      this.store.dispatch(
        new authActions.login({
          email: user.name,
          localId: user.password,
          idToken: user._token,
          expiresIn: new Date(user._tokenExpirationData).getTime(),
        })
      );
      this.autoLogout(_tokenExpirationData);
      this.router.navigate(["./recipe"]);
    }
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
