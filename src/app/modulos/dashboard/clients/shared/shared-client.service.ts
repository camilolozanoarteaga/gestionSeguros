import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClientInterface } from '@atention-models/client.interface';

@Injectable()
export class SharedClientService {

  private _dataClient = new BehaviorSubject<ClientInterface>(null);
  clientCast$ = this._dataClient.asObservable();

  constructor() { }

  editUser(data: ClientInterface) {

    this._dataClient.next(data);

  }
}
