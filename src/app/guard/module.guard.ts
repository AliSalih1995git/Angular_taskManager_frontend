import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModuleGuard implements CanLoad {
  constructor(private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userDataStr = localStorage.getItem('user');

    if (userDataStr) {
      const userData = JSON.parse(userDataStr);
      console.log(userData, 'userDataStr');

      if (userData && userData?.others?.role === 'admin') {
        return true;
      }
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
