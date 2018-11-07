import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _authService: AuthService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    return this._authService.user$
      .pipe(
        take(1),
        map(user => !!user),
        tap(isAuthenticated => {

          if (!isAuthenticated) {

            console.error('Access denied');
            this._router.navigate(['auth/login']);

          }

        })
      );

  }

}
