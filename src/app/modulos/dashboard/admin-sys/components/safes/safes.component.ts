import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AdminSysService } from '@atention-services/admin-sys/admin-sys.service';


@Component({
  selector: 'app-safes',
  templateUrl: './safes.component.html',
  styleUrls: ['./safes.component.sass']
})
export class SafesComponent implements OnInit {

  safeForm: FormGroup;
  allSafes: any;
  loadInit: boolean;
  loadUpdate: boolean;
  error: boolean;

  constructor(
    private _fb: FormBuilder,
    private _adminSysService: AdminSysService
  ) { }

  ngOnInit() {

    this.loadInit = true;
    this.error = false;
    this.safeForm = this._fb.group({
      safe: ['', [
        Validators.required,
      ]],
    });

    this._adminSysService.getAllSafes().subscribe(
      (safes) => {

        this.allSafes = safes[0]['safes'];
        this.loadInit = false;

      }
    );

  }

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.safeForm.get(inputName).invalid &&
      (this.safeForm.get(inputName).dirty || this.safeForm.get(inputName).touched);

  }

  createSafe() {

    this.loadUpdate = true;
    this.error = false;
    this.allSafes.push(this.safeForm.value['safe']);

    this._adminSysService.updateSafes(this.allSafes)
      .then(() => {

        this.loadUpdate = false;

      })
      .catch(() => {

        this.error = true;

      });

  }

  removeSafe(safe: string) {

    this.error = false;
    this.loadUpdate = true;
    const index = this.allSafes.indexOf(safe);

    if (index > -1) {

      this.allSafes.splice(index, 1);

    }

    this._adminSysService.updateSafes(this.allSafes)
      .then(() => {

        this.loadUpdate = false;

      })
      .catch(() => {

        this.error = true;

      });

  }

  cleanForm() {

    this.safeForm.reset();

  }

}
