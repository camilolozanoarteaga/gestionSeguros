import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AdminSysService } from '@atention-services/admin-sys/admin-sys.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.sass']
})
export class CompaniesComponent implements OnInit {

  CompanieForm: FormGroup;
  allCompanies: any;

  constructor(
    private _fb: FormBuilder,
    private _adminSysService: AdminSysService
  ) { }

  ngOnInit() {

    this.CompanieForm = this._fb.group({
      companies: ['', [
        Validators.required,
      ]]
    });

    this._adminSysService.getAllCompanies()
      .subscribe((companies) => {

        this.allCompanies = companies[0]['companies'];

      }, err => console.log(err));

  }

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.CompanieForm.get(inputName).invalid &&
      (this.CompanieForm.get(inputName).dirty || this.CompanieForm.get(inputName).touched);

  }

  createCompanie() {

    this.allCompanies.push(this.CompanieForm.value['companies']);
    this._adminSysService.updateCompanies(this.allCompanies);

  }

  removeCompanie(name: string) {

    const index = this.allCompanies.indexOf(name);

    if (index > -1) {

      this.allCompanies.splice(index, 1);

    }

    this._adminSysService.updateCompanies(this.allCompanies);

  }

  cleanForm() {

    this.CompanieForm.reset();

  }


}
