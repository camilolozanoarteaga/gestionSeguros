import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.sass']
})
export class CreatePolicyComponent implements OnInit {

  policyForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
  ) { }

  ngOnInit() {

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
      phone2: ['', [
        Validators.required
      ]],
      phone3: ['', [
        Validators.required
      ]],
      celphone1: ['', [
        Validators.required
      ]],
      celphone2: ['', [
        Validators.required
      ]],
      celphone3: ['', [
        Validators.required
      ]],
      id: ['', [
        Validators.required
      ]],
      systemType: [2], // client
      state: [true],
      // Data poliza
      numeroPoliza: ['', [Validators.required]],
      vigencia: ['', [Validators.required]],
      // numeroPoliza: ['', [Validators.required]],
      // numeroPoliza: ['', [Validators.required]]
    });

  }

    // COMPONENT METHODS ---------------------------------------------------------

    isInvalidRegisterFormGroupInput(inputName: string): boolean {

      return this.policyForm.get(inputName).invalid &&
        (this.policyForm.get(inputName).dirty || this.policyForm.get(inputName).touched);
  
    }

    createPolicy() {

      console.log( this.policyForm.value);


    }

    cleanForm() {

      this.policyForm.reset();

    }

}
