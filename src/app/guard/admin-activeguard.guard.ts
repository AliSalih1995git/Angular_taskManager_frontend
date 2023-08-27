import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminActiveguardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userDataStr = localStorage.getItem('user');
    if (userDataStr) {
      const userData = JSON.parse(userDataStr);
      console.log(userData?.others?.role, 'role');

      if (userData && userData?.others?.role == 'admin') {
        console.log('enter adminroute');
        return true;
      }
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
