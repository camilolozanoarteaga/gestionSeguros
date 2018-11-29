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
  load: boolean;
  success: boolean;
  error: boolean;

  constructor(
    private _fb: FormBuilder,
    private _sharedUserDataService: SharedUserDataService,
    private _adminUsersService: AdminUsersService
  ) { }

  ngOnInit() {

    this.load = false;
    this.success = false;
    this.error = false;
    this._sharedUserDataService.userCast$.subscribe(
      user => {

        this.user = user;
        this.userForm = this._fb.group({
          email: [user['email'], [
            Validators.required,
            Validators.email
          ]],
          names: [user['names'], [
            Validators.required,
            Validators.pattern('^[áéíúóñÑa-zA-Z \s]+$')
          ]],
          address: [user['address'], [
            Validators.required,
            Validators.pattern('^[áéíúóñÑa-zA-Z0-9 \-/#\s]+$')
          ]],
          phone: [user['phone'], [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
            Validators.maxLength(10),
          ]],
          celphone: [user['celphone'], [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
            Validators.maxLength(10)
          ]],
          userType: [user['userType'], [
            Validators.required
          ]],
          id: [user['id'], [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
          ]],
          uid: [user['uid'], [
            Validators.required
          ]],
          systemType: [1],
          state: [user['state']]
        });

      }, err => console.log(err)
      , () => { });



  }

  // COMPONENT METHODS ---------------------------------------------------------

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.userForm.get(inputName).invalid &&
      (this.userForm.get(inputName).dirty || this.userForm.get(inputName).touched);

  }

  updateUser() {

    this.load = true;
    this.error = false;

    this._adminUsersService.updateSystemUser(this.userForm.value)
      .then(() => {

        this.load = false;
        this.success = true;

        setTimeout(() => {

          this.success = false;

        }, 5000);

      })
      .catch(() => {

        this.error = true;

      });

  }

}
