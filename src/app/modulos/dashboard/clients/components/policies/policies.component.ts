import { Component, OnInit } from '@angular/core';
import { SharedClientService } from '../../shared/shared-client.service';
import { ClientInterface } from '@atention-models/client.interface';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.sass']
})
export class PoliciesComponent implements OnInit {

  client: ClientInterface;

  constructor(
    private _sharedClientService: SharedClientService,
  ) { }

  ngOnInit() {

    this._sharedClientService.clientCast$.subscribe((client) => {

      this.client = client;

    });

  }

}
