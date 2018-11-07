import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.sass']
})
export class CompaniesComponent implements OnInit {

  CompanieForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.CompanieForm = this._fb.group({
      nameCompanie: ['', [
        Validators.required,
      ]],
    });

  }

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.CompanieForm.get(inputName).invalid &&
      (this.CompanieForm.get(inputName).dirty || this.CompanieForm.get(inputName).touched);

  }

  createCompanie() {

    console.log(this.CompanieForm.value);

  }

  cleanForm() {

    this.CompanieForm.reset();

  }


}
