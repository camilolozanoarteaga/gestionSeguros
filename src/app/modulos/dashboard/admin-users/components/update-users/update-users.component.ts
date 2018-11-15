import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SharedUserDataService } from '../../shared/shared-user-data.service';
import { SystemUsersmInterface } from '@atention-models/system-users.interface';
import { AdminUsersService } from '@atention-services/admin-users/admin-users.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.sass'],
})
export class UpdateUsersComponent implements OnInit {

  userForm: FormGroup;
  user: SystemUsersmInterface;

  constructor(
    private _fb: FormBuilder,
    private _sharedUserDataService: SharedUserDataService,
    private _adminUsersService: AdminUsersService
  ) { }

  ngOnInit() {

    this._sharedUserDataService.userCast$.subscribe(
      user => {

        this.user = user;
        this.userForm = this._fb.group({
          email: [user['email'], [
            Validators.required,
            Validators.email
          ]],
          names: [user['names'], [
            Validators.required
          ]],
          address: [user['address'], [
            Validators.required
          ]],
          phone: [user['phone'], [
            Validators.required
          ]],
          celphone: [user['celphone'], [
            Validators.required
          ]],
          userType: [user['userType'], [
            Validators.required
          ]],
          id: [user['id'], [
            Validators.required
          ]],
          uid: [user['uid'], [
            Validators.required
          ]],
          systemType: [1],
          state: [user['state']]
        });

      }, err => console.log(err)
      , () => {


      });



  }

  // COMPONENT METHODS ---------------------------------------------------------

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.userForm.get(inputName).invalid &&
      (this.userForm.get(inputName).dirty || this.userForm.get(inputName).touched);

  }

  updateUser() {
    console.log(this.userForm.value);
    this._adminUsersService.updateSystemUser(this.userForm.value);

  }

}
