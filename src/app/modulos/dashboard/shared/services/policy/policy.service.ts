import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ClientInterface } from '@atention-models/client.interface';
import { Observable } from 'rxjs';

@Injectable()
export class PolicyService {

  private _collection = 'clients';
  private _collectionPolizy = 'policies';

  clientDocument: AngularFirestoreDocument<ClientInterface>;
  clientObservable$: Observable<ClientInterface>;

  private _policies: AngularFirestoreCollection<any> = this._afs.collection(this._collectionPolizy);


  constructor(
    private _afs: AngularFirestore,
  ) { }

  getClient(id: string): Observable<ClientInterface> {

    this.clientDocument = this._afs.doc(`${this._collection}/${id}`);
    this.clientObservable$ = this.clientDocument.valueChanges();

    return this.clientObservable$;

  }

  createPolice(policy: any) {

    return this._policies.doc(policy['numberPolicy']).set(policy);

  }

}
