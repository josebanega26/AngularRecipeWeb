import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from "@angular/router";
import { AuthService } from "./auth.service";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree  | Promise<boolean | UrlTree > | Observable<boolean| UrlTree >  {
    return this.authService.userSubject.pipe(
      take(1),
      map((user: any) => {
        console.log('user', user)
        const isAuth = !!user;
        if (isAuth) {
          return isAuth;
        }
        return this.router.createUrlTree(["./"]);
      })
    );
  }
}
