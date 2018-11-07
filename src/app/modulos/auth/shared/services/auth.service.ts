import { Injectable } from '@angular/core';
import { AngularFireAuth, } from 'angularfire2/auth';
import { Observable, } from 'rxjs';


@Injectable()
export class AuthService {

  user$: Observable<any>;

  constructor(

    private _afAuth: AngularFireAuth

    ) {

  }


  signIn(email: string, password: string): Promise<any> {

    return this._afAuth.auth.signInWithEmailAndPassword(email, password);

  }

  logout() {

    return this._afAuth.auth.signOut();

  }


}
