import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class ListService {

  safesDocument: AngularFirestoreDocument<any>;
  safesObservable$: Observable<any>;

  company: AngularFirestoreDocument<any>;
  company$: Observable<any>;

  constructor(
    private _afs: AngularFirestore,
  ) { }

  getSafes(): Observable<any> {

    this.safesDocument = this._afs.doc(`safes/safes`);
    this.safesObservable$ = this.safesDocument.valueChanges();

    return this.safesObservable$;

  }

  getCompanies(): Observable<any> {

    this.company = this._afs.doc(`companies/companies`);
    this.company$ = this.company.valueChanges();

    return this.company$;

  }

}
