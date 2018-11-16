import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminUsersService } from '@atention-services/admin-users/admin-users.service';
import { Subscription } from 'rxjs';
import { SystemUsersmInterface } from '@atention-models/system-users.interface';
import { SharedUserDataService } from '../../shared/shared-user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.sass']
})
export class ListUsersComponent implements OnInit, OnDestroy {

  listUsersSubscription: Subscription;
  listUser: any;
  totalUsers: Number;
  loadInit: boolean;

  constructor(
    private _adminUsersService: AdminUsersService,
    private _sharedUserDataService: SharedUserDataService,
    private _router: Router,
  ) { }

  ngOnInit() {

    this.loadInit = true;

    this.listUsersSubscription = this._adminUsersService.getAllUsers()
      .subscribe((list) => {

        this.listUser = list;
        this.totalUsers = list.length;
        this.loadInit = false;

      }, err => console.log(err));

  }

  editUser(user: SystemUsersmInterface) {

    this._sharedUserDataService.editUser(user);
    this._router.navigate(['/dashboard/admin-users/update']);

  }

  ngOnDestroy() {

    this.listUsersSubscription.unsubscribe();

  }

}
