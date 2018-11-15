import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PolicyService } from '@atention-services/policy/policy.service';
import { ClientsService } from '@atention-services/clients/clients.service';
import { ListService } from '@atention-services/list/list.service';
import { AdminUsersService } from '@atention-services/admin-users/admin-users.service';

import * as moment from 'moment';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.sass']
})
export class CreatePolicyComponent implements OnInit {

  policyClientForm: FormGroup;
  policyForm: FormGroup;

  existUser: boolean;
  age: number;
  agent: any;

  idCLient: string;

  companyList: string[];
  safesList: String[];

  enabledPolicy: boolean;

  constructor(
    private _fb: FormBuilder,
    private _policyService: PolicyService,
    private _clientsService: ClientsService,
    private _listService: ListService,
    private _adminUsersService: AdminUsersService
  ) { }

  ngOnInit() {

    this.enabledPolicy = true;

    this.existUser = false;
    this.age = null;
    this.idCLient = null;

    this.policyClientForm = this._fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      names: ['', [
        Validators.required
      ]],
      address: ['', [
        Validators.required
      ]],
      phone1: ['', [
        Validators.required
      ]],
      birth: ['', [
        Validators.required
      ]],
      celphone1: ['', [
        Validators.required
      ]],
      gender: ['', [
        Validators.required
      ]],
      id: ['', [
        Validators.required
      ]],
      systemType: [2], // client
      state: [true],
    });

    this.policyForm = this._fb.group({
      numberPolicy: ['', [
        Validators.required,
      ]],
      validityInit: ['', [
        Validators.required,
      ]],
      validityFinish: ['', [
        Validators.required,
      ]],
      safeType: ['', [
        Validators.required,
      ]],
      company: ['', [
        Validators.required,
      ]],
      assuredProduct: ['', [
        Validators.required,
      ]],
      policyValue: ['', [
        Validators.required,
      ]],
      wayToPay: ['', [
        Validators.required,
      ]],
      insured: ['', [
        Validators.required,
      ]],
      NewOrRenewal: ['', [
        Validators.required,
      ]],
      adviser: ['', [
        Validators.required,
      ]],
      detail: ['', [
        Validators.required,
      ]],
      idClient: ['', [
        Validators.required
      ]],
    });

    this._listService.getCompanies().subscribe((company) => this.companyList = company['companies'] );
    this._listService.getSafes().subscribe((safe) => this.safesList = safe['safes'] );
    this._adminUsersService.getAllUsers().subscribe( (user) => this.agent = user );

  }

  // COMPONENT METHODS ---------------------------------------------------------

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.policyClientForm.get(inputName).invalid &&
      (this.policyClientForm.get(inputName).dirty || this.policyClientForm.get(inputName).touched);

  }

  isInvalidRegisterFormGroupInputPolicy(inputName: string): boolean {

    return this.policyForm.get(inputName).invalid &&
      (this.policyForm.get(inputName).dirty || this.policyForm.get(inputName).touched);

  }

  createPolicy() {

    this._policyService.createPolice(this.policyForm.value)
      .then((success) => { console.log(success); })
      .catch((err) => { console.log(err); });

  }

  searchClient(id: string) {

    this._policyService.getClient(id).subscribe(
      client => {

        if ( client !== undefined ) {

          this.existUser = true;

          setTimeout(() => {
            this.existUser = false;
          }, 6000);

          this.policyClientForm.get('email').setValue(client['email']);
          this.policyClientForm.get('names').setValue(client['names']);
          this.policyClientForm.get('address').setValue(client['address']);
          this.policyClientForm.get('phone1').setValue(client['phone1']);
          this.policyClientForm.get('birth').setValue(client['birth']);
          this.policyClientForm.get('celphone1').setValue(client['celphone1']);
          this.policyClientForm.get('gender').setValue(client['gender']);

          this.policyForm.get('idClient').setValue(client['id']);

          this.policyClientForm.disable();
          this.enabledPolicy = false;

        } else {

          this.existUser = null;
          setTimeout(() => {

            this.existUser = false;

          }, 6000);

        }

      }
    );

  }

  calAge(date: string) {

    const hoy = moment();
    const anios = hoy.diff(date, 'years');
    this.age = anios;

  }

  createClient() {

    this._clientsService.createClient(this.policyClientForm.value)
      .then((res) => {

        console.log(res);

      })
      .catch((err) => {

        console.log(err);

      });

  }

  cleanForm() {

    this.policyClientForm.reset();
    this.policyClientForm.enable();
    this.enabledPolicy = true;

  }

}
