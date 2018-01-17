import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router'
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';
import { RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  

  constructor(private auth:AuthService,
  private router:Router) { }

  canActivate(route, state:RouterStateSnapshot){  //canActivate stiti rute, a routerStateSnapshot pamti na kojoj je ruti bio a nije bio autentifikovan
    return this.auth.user$.map(user =>{
      if(user) return true;

      this.router.navigate(['/login'], {queryParams: {returnUrl:state.url}});
      return false;
    });

  }

}
