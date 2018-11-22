import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AdminUsersService } from '@atention-services/admin-users/admin-users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
  existUser: boolean;
  success: boolean;
  loadInit: boolean;

  constructor(
    private _fb: FormBuilder,
    private _adminUsersService: AdminUsersService

  ) { }

  ngOnInit() {

    this.existUser = false;
    this.success = false;
    this.loadInit = false;

    this.userForm = this._fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['admin123', [
        Validators.required
      ]],
      names: ['', [
        Validators.required,
        Validators.pattern('^[áéíúóñÑa-zA-Z\s]+$')
      ]],
      address: ['', [
        Validators.required,
        Validators.pattern('^[áéíúóñÑa-zA-Z0-9 \-/#\s]+$')
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      celphone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      userType: ['', [
        Validators.required
      ]],
      id: ['', [
        Validators.required
      ]],
      systemType: [1],
      state: [true]
    });

  }

  // COMPONENT METHODS ---------------------------------------------------------

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.userForm.get(inputName).invalid &&
      (this.userForm.get(inputName).dirty || this.userForm.get(inputName).touched);

  }

  createUser() {

    this.success = false;
    this.existUser = false;
    this.loadInit = true;

    this._adminUsersService.createSystemUser(this.userForm.value)
      .then((success) => {
        this.success = true;
        this.loadInit = false;

        setTimeout(() => {
          this.success = false;
        }, 4000)

      })
      .catch(() => {

        this.loadInit = false;
        this.existUser = true;
        setTimeout(() => {
          this.existUser = false;
        }, 4000)

      })


  }

}
