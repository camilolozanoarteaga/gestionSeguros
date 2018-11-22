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

  updatePolicy(policie: any) {

    console.log(policie)
    this._policyService.createLogPolicy()
      .then((success) => {
        console.log('bien', success);
      })
      .catch((err) => {
        console.log('mal', err);
      });

  }

  isInvalidRegisterFormGroupInput(inputName: string): boolean {

    return this.UpdatePolicyForm.get(inputName).invalid &&
      (this.UpdatePolicyForm.get(inputName).dirty || this.UpdatePolicyForm.get(inputName).touched);

  }

  open(content) {
    this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
     
    }, (reason) => {
      
    });
  }

}
