import { Component, OnInit } from '@angular/core';
import { SharedClientService } from '../../shared/shared-client.service';
import { ClientInterface } from '@atention-models/client.interface';
import { PolicyService } from '@atention-services/policy/policy.service';

import * as moment from 'moment';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.sass']
})
export class PoliciesComponent implements OnInit {


  client: ClientInterface;
  policies: any;

  constructor(
    private _sharedClientService: SharedClientService,
    private _policyService: PolicyService
  ) { }

  ngOnInit() {

    this._sharedClientService.clientCast$.subscribe((client) => {

      this.client = client;
      this.getPolicies(this.client['id']);

    });

  }

  getPolicies(id: string) {
    console.log(id)
    this._policyService.getPolicies(id)
      .subscribe((data) =>{

        this.policies = data;
        
        console.log(this.policies[0])
      });

  }

}
