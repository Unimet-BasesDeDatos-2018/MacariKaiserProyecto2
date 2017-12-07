import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable'
import { Route } from '@angular/router/src/config';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth
    ){ }

    canActivate(): Observable<boolean>{
        return this.afAuth.authState.map(auth => {
            if(!auth){
                this.router.navigate(['/login']);
            }
            else{
                return true;
            }
        });
    }
}