import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { SystemUsersmInterface } from '@atention-models/system-users.interface';
import { Observable } from 'rxjs';

@Injectable()
export class AdminUsersService {

  private _collection = 'system-users';
  private _systemUsers: AngularFirestoreCollection<any> = this._afs.collection(this._collection);

  userCollection: AngularFirestoreCollection<SystemUsersmInterface>;
  $userObservable: Observable<SystemUsersmInterface[]>;

  constructor(
    private _afs: AngularFirestore,
    private _afAuth: AngularFireAuth,
  ) {}

  async createSystemUser(user: SystemUsersmInterface) {

    const userCredential = await this._afAuth.auth.createUserWithEmailAndPassword(user['email'], user['password']);

    const userUid = userCredential.user.uid;
    user.uid = userUid;

    return this._systemUsers.doc(user['uid']).set(user);

  }

  getAllUsers() {

    this.userCollection = this._afs.collection(this._collection);
    return this.$userObservable = this.userCollection.valueChanges();

  }

  updateSystemUser(userData: SystemUsersmInterface) {

    const user = this._afs.doc(`${this._collection}/${userData['uid']}`);
    return user.update(userData);

  }

}
