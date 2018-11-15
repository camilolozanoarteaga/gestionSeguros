import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientInterface } from '@atention-models/client.interface';
import { Router } from '@angular/router';
import { ClientsService } from '@atention-services/clients/clients.service';
import { SharedClientService } from '../../shared/shared-client.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.sass']
})
export class ListClientsComponent implements OnInit, OnDestroy {

  listClientsSubscription: Subscription;
  listClients: any;
  totalClients: Number;

  constructor(
    private _router: Router,
    private _ClientsService: ClientsService,
    private _sharedClientService: SharedClientService
  ) { }

  ngOnInit() {

    this.listClientsSubscription = this._ClientsService.getAllClients()
    .subscribe((list) => {

      this.listClients = list;
      this.totalClients = list.length;

    }, err => console.log(err));

  }


  editUser(user: ClientInterface) {

    this._sharedClientService.editUser(user);
    this._router.navigate(['/dashboard/clients/update']);

  }

  ngOnDestroy() {

    // this.listUsersSubscription.unsubscribe();

  }

}
