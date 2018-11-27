import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AdminSysService } from '@atention-services/admin-sys/admin-sys.service';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.sass']
})
export class CompaniesComponent implements OnInit {

  CompanieForm: FormGroup;
  allCompanies: any;
  loadInit: boolean;
  loadUpdate: boolean;
  error: boolean;

  existCompany: boolean;

  constructor(
    private _fb: FormBuilder,
    private _adminSysService: AdminSysService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    this.existCompany = false;

    this.loadInit = true;
    this.CompanieForm = this._fb.group({
      companies: ['', [
        Validators.required,
        Validators.pattern('^[áéíúóñÑa-zA-Z \s]+$'),
      ]]
    });

    this._adminSysService.getAllCompanies()
      .subscribe((companies) => {

        this.allCompanies = companies[0]['companies'];
        this.loadInit = false;

      }, err => console.log(err));

  }

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.CompanieForm.get(inputName).invalid &&
      (this.CompanieForm.get(inputName).dirty || this.CompanieForm.get(inputName).touched);

  }

  createCompanie() {

    this.existCompany = false;

    if (this.allCompanies.includes(this.CompanieForm.value['companies'])) {
      this.existCompany = true;
    } else {
      this.loadUpdate = true;
      this.error = false;
      this.allCompanies.push(this.CompanieForm.value['companies']);
      this._adminSysService.updateCompanies(this.allCompanies)
        .then(() => {

          this.loadUpdate = false;

        })
        .catch(() => {

          this.error = true;

        });
    }

  }

  removeCompanie(name: string) {

    this.loadUpdate = true;
    this.error = false;
    const index = this.allCompanies.indexOf(name);

    if (index > -1) {

      this.allCompanies.splice(index, 1);

    }

    this._adminSysService.updateCompanies(this.allCompanies)
      .then(() => {

        this.loadUpdate = false;

      })
      .catch(() => {

        this.error = true;

      });

  }

  cleanForm() {

    this.CompanieForm.reset();

  }


}
