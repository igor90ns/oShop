import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';
import { UserService } from './user.service';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminAuthGuard implements CanActivate{

  constructor(private auth:AuthService, private userServise:UserService) { }

  canActivate():Observable<boolean>{

   return this.auth.appUser$
    .map(appUser => appUser.isAdmin)
  }

}
