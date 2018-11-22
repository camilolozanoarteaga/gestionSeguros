import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientsService } from '@atention-services/clients/clients.service';
import { PolicyService } from '@atention-services/policy/policy.service';

import * as moment from 'moment';

@Component({
  selector: 'app-information-client',
  templateUrl: './information-client.component.html',
  styleUrls: ['./information-client.component.sass']
})
export class InformationClientComponent implements OnInit {

  policyForm: FormGroup;
  age: number;
  load: boolean;
  error: boolean;
  success: boolean;
  existUser: boolean;

  constructor(
    private _fb: FormBuilder,
    private _clientsService: ClientsService,
    private _policyService: PolicyService,
  ) { }

  ngOnInit() {

    this.existUser = false;
    this.age = null;
    this.error = false;
    this.load = false;
    this.success = false;

    this.policyForm = this._fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      names: ['', [
        Validators.required,
        Validators.pattern('^[áéíúóñÑa-zA-Z\s]+$')
      ]],
      address: ['', [
        Validators.required,
        Validators.pattern('^[áéíúóñÑa-zA-Z0-9 \-/#\s]+$')
      ]],
      phone1: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.maxLength(10)
      ]],
      birth: ['', [
        Validators.required
      ]],
      celphone1: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.maxLength(10)
      ]],
      gender: ['', [
        Validators.required
      ]],
      id: ['', [
        Validators.required
      ]],
      systemType: [2], // client
      state: [true]
    });


  }

  // COMPONENT METHODS ---------------------------------------------------------

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.policyForm.get(inputName).invalid &&
      (this.policyForm.get(inputName).dirty || this.policyForm.get(inputName).touched);

  }

  searchClient(id: string) {

    this._policyService.getClient(id).subscribe((success) => {

      this.existUser = (success !== undefined);

    });

  }


  calAge(date: string) {

    const hoy = moment();
    const anios = hoy.diff(date, 'years');
    this.age = anios;

  }

  createClient() {

    this.load = true;
    this.error = false;

    this._clientsService.createClient(this.policyForm.value)
      .then((res) => {

        this.policyForm.reset();
        this.load = false;

        this.success = true;

        setTimeout(() => {
          this.success = false;
        }, 5000);

      })
      .catch((err) => {

        this.error = true;


      });

  }

  cleanForm() {

    this.policyForm.reset();

  }

}
