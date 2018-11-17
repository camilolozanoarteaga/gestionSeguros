import { Component, OnInit } from '@angular/core';
import { SharedClientService } from '../../shared/shared-client.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientsService } from '@atention-services/clients/clients.service';

import * as moment from 'moment';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.sass']
})
export class UpdateClientComponent implements OnInit {

  policyForm: FormGroup;
  age: number;
  load: boolean;
  success: boolean;
  error: boolean;


  constructor(
    private _fb: FormBuilder,
    private _sharedClientService: SharedClientService,
    private _clientsService: ClientsService
  ) { }

  ngOnInit() {

    this.age = null;
    this.load = false;
    this.success = false;
    this.error = false;

    this._sharedClientService.clientCast$.subscribe(
      client => {

        this.policyForm = this._fb.group({
          email: [client['email'], [
            Validators.required,
            Validators.email
          ]],
          names: [client['names'], [
            Validators.required
          ]],
          address: [client['address'], [
            Validators.required
          ]],
          phone1: [client['phone1'], [
            Validators.required
          ]],
          birth: [client['birth'], [
            Validators.required
          ]],
          celphone1: [client['celphone1'], [
            Validators.required
          ]],
          gender: [client['gender'], [
            Validators.required
          ]],
          id: [client['id'], [
            Validators.required
          ]],
          systemType: [2], // client
          state: [client['state'], [
            Validators.required
          ]]
        });

        this.calAge(this.policyForm.value['birth']);

      });

  }

  // COMPONENT METHODS ---------------------------------------------------------

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.policyForm.get(inputName).invalid &&
      (this.policyForm.get(inputName).dirty || this.policyForm.get(inputName).touched);

  }

  calAge(date: string) {

    const hoy = moment();
    const anios = hoy.diff(date, 'years');
    this.age = anios;

  }

  updateClient() {

    this.load = true;
    this.error = false;

    this._clientsService.updateSystemUser(this.policyForm.value)
      .then((res) => {

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

}