import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UtilService } from '../services/util.service';

@Injectable({
  providedIn: 'root'
})
export class OnboardGuard implements CanActivate {

  constructor(
    private router: Router,
    private util: UtilService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const onboard = this.util.getLocalStorage('onboard');
    if(onboard) {
      this.router.navigate(['tabs']);
      return false;
    }
    this.util.setLocalStorage('onboard', true);
    return true;
  }
}
