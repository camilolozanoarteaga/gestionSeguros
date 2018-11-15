import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientsService } from '@atention-services/clients/clients.service';

import * as moment from 'moment';

@Component({
  selector: 'app-information-client',
  templateUrl: './information-client.component.html',
  styleUrls: ['./information-client.component.sass']
})
export class InformationClientComponent implements OnInit {

  policyForm: FormGroup;
  age: number;

  constructor(
    private _fb: FormBuilder,
    private _clientsService: ClientsService
  ) { }

  ngOnInit() {

    this.age = null;

    this.policyForm = this._fb.group({
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
      state: [true]
    });


  }

  // COMPONENT METHODS ---------------------------------------------------------

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.policyForm.get(inputName).invalid &&
      (this.policyForm.get(inputName).dirty || this.policyForm.get(inputName).touched);

  }

  searchClient(id: string) {

    console.log(id);
    // this._clientsService;

  }


  calAge(date: string) {

    const hoy = moment();
    const anios = hoy.diff(date, 'years');
    this.age = anios;

  }

  createClient() {

    this._clientsService.createClient(this.policyForm.value)
      .then((res) => {

        this.policyForm.reset();
        console.log(res);


      })
      .catch((err) => {

        console.log(err);

      });

  }

  cleanForm() {

    this.policyForm.reset();

  }

}
