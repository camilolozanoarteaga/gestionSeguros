import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';

@Injectable()
export class AdminSysService {

  private _companiesCollection = 'companies';
  private _safesCollection = 'safes';


  private _updateCompanies = this._afs.doc('companies/companies');
  private _updateSafes = this._afs.doc('safes/safes');


  companiesCollection: AngularFirestoreCollection<String>;
  $companiesObservable: Observable<String[]>;

  safesCollection: AngularFirestoreCollection<String>;
  $safesObservable: Observable<String[]>;

  constructor(
    private _afs: AngularFirestore,
  ) { }


  getAllCompanies() {

    this.companiesCollection = this._afs.collection(this._companiesCollection);
    return this.$companiesObservable = this.companiesCollection.valueChanges();

  }

  updateCompanies(companies: [string]) {

    return this._updateCompanies.update({ companies });

  }

  getAllSafes() {

    this.safesCollection = this._afs.collection(this._safesCollection);
    return this.$safesObservable = this.safesCollection.valueChanges();

  }

  updateSafes(safes: [string]) {

    return this._updateSafes.update({ safes });

  }

}
