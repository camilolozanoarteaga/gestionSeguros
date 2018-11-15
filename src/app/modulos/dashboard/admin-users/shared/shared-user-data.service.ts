import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SystemUsersmInterface } from '@atention-models/system-users.interface';

@Injectable()
export class SharedUserDataService {

  private _dataUser = new BehaviorSubject<SystemUsersmInterface>(null);
  userCast$ = this._dataUser.asObservable();

  constructor() { }

  editUser(data: SystemUsersmInterface) {

    this._dataUser.next(data);

  }

}
