import { Component, OnInit } from '@angular/core';
import { SharedClientService } from '../../shared/shared-client.service';
import { ClientInterface } from '@atention-models/client.interface';
import { PolicyService } from '@atention-services/policy/policy.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.sass']
})
export class PoliciesComponent implements OnInit {

  UpdatePolicyForm: FormGroup;
  client: ClientInterface;
  policies: any;
  selectedPolicy: any;

  constructor(
    private _sharedClientService: SharedClientService,
    private _policyService: PolicyService,
    private _fb: FormBuilder,
    private _modalService: NgbModal
  ) { }

  ngOnInit() {

    this.UpdatePolicyForm = this._fb.group({
      validityInit: ['', [
        Validators.required,
      ]],
      validityFinish: ['', [
        Validators.required,
      ]],
      policy: ['', [
        Validators.required,
      ]]
    })

    this._sharedClientService.clientCast$.subscribe((client) => {

      this.client = client;
      this.getPolicies(this.client['id']);

    });

  }

  getPolicies(id: string) {

    this._policyService.getPolicies(id)
      .subscribe((data) => {

        this.policies = data;

      });

  }

  updatePolicy() {


    const { validityInit, validityFinish, policy } = this.UpdatePolicyForm.value;

    this.selectedPolicy['validityInit'] = validityInit;
    this.selectedPolicy['validityFinish'] = validityFinish;
    this.selectedPolicy['NewOrRenewal'] = 'Renovar';

    this._policyService.createPolice(this.selectedPolicy)
      .then(() => {

        return this._policyService.createLogPolicy(policy, validityInit, validityFinish)

          .then((success) => {

            console.log('bien', success);
            this._modalService.dismissAll();

          });

      }).catch((err) => {

        console.log('mal', err);
        this._modalService.dismissAll();

      });

  }

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.UpdatePolicyForm.get(inputName).invalid &&
      (this.UpdatePolicyForm.get(inputName).dirty || this.UpdatePolicyForm.get(inputName).touched);

  }

  open(content, policie) {

    this.selectedPolicy = policie;
    this.UpdatePolicyForm.get('policy').setValue(policie['numberPolicy']);
    this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });

  }

}
