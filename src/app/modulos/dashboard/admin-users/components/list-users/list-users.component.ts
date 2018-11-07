import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminUsersService } from '@atention-services/admin-users/admin-users.service';
import { Subscription } from 'rxjs';
import { SystemUsersmInterface } from '@atention-models/system-users.interface';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.sass']
})
export class ListUsersComponent implements OnInit, OnDestroy {


  listUsersSubscription : Subscription;
  listUser: any;
  totalUsers: Number;

  constructor(
    private _adminUsersService : AdminUsersService,
  ) { }

  ngOnInit() {

    this.listUsersSubscription = this._adminUsersService.getAllUsers()
    .subscribe((list) => {

      this.listUser = list;
      this.totalUsers = list.length;
    }, err => console.log(err));

  }

  editUser(user: SystemUsersmInterface ) {
    console.log(user);
  }

  ngOnDestroy() {

    this.listUsersSubscription.unsubscribe;

  }

}
