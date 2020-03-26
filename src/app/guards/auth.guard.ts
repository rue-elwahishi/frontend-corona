import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,  UrlTree} from '@angular/router';
import {AuthService} from '../services/auth.service';
import { Observable } from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate {
   
    constructor(private auth:AuthService, private router:Router){}
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
    : | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree 
    {
        if(this.auth.loggedIn())
    }

}