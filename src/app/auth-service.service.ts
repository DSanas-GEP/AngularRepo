import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService implements CanActivate {
  constructor(private router: Router) {}
  logged = false;
  setLogged(loggedin) {
    this.logged = loggedin;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route.url[0].path);
    if (!this.logged) this.router.navigate(['/forms', route.url[0].path]);
    return true;
  }
}







