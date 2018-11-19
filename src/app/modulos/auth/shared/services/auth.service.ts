import { Injectable } from '@angular/core';
import { AngularFireAuth, } from 'angularfire2/auth';
import { Observable, of } from 'rxjs';
import { switchMap, skipWhile, map as rxjsMap } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class AuthService {

  user$: Observable<any>;

  constructor(

    private _afs: AngularFirestore,
    private _afAuth: AngularFireAuth

  ) {

    this.user$ = this._afAuth.authState
      .pipe(

        switchMap(authUser => {

          if (!authUser) {

            return of(null);

          }

          return this._afs.doc(`system-users/${authUser.uid}`).valueChanges()
            .pipe(
              skipWhile((userData: any) => !userData),
              rxjsMap((userData: any) => {

                console.log('---->', userData);
                return userData;

              })
            );

        })

      );

  }


  signIn(email: string, password: string): Promise<any> {

    return this._afAuth.auth.signInWithEmailAndPassword(email, password);

  }

  logout() {

    return this._afAuth.auth.signOut();

  }


}
