import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-safes',
  templateUrl: './safes.component.html',
  styleUrls: ['./safes.component.sass']
})
export class SafesComponent implements OnInit {

  safeForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
  ) { }

  ngOnInit() {

    this.safeForm = this._fb.group({
      nameCompanie: ['', [
        Validators.required,
      ]],
    });

  }

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.safeForm.get(inputName).invalid &&
      (this.safeForm.get(inputName).dirty || this.safeForm.get(inputName).touched);

  }

  createSafe() {

    console.log(this.safeForm.value);

  }

  cleanForm() {

    this.safeForm.reset();

  }

}
