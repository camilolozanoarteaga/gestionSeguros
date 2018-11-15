import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ClientInterface } from '@atention-models/client.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ClientsService {

  private _collection = 'clients';
  private _clientsUsers: AngularFirestoreCollection<any> = this._afs.collection(this._collection);

  clientCollection: AngularFirestoreCollection<ClientInterface>;
  $clientObservable: Observable<ClientInterface[]>;


  constructor(
    private _afs: AngularFirestore,
  ) { }

  createClient(client: ClientInterface) {

    // return this._clientsUsers.add(client);
    return this._clientsUsers.doc(client['id']).set(client);

  }

  getAllClients(): Observable<ClientInterface[]> {

    this.clientCollection = this._afs.collection(this._collection);
    return this.$clientObservable = this.clientCollection.valueChanges();

  }


  updateSystemUser(userData: ClientInterface) {

    const user = this._afs.doc(`${this._collection}/${userData['id']}`);
    return user.update(userData);

  }

}
