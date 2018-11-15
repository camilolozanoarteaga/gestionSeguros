import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.sass']
})
export class ClientsComponent implements OnInit {

  // tabs select
  createSelected: string;
  viewList: string;

  createComponent: boolean;
  viewListComponent: boolean;

  constructor() { }

  ngOnInit() {

    this.createSelected = 'nav-link active';
    this.viewList = 'nav-link';
    this.createComponent = true;
    this.viewListComponent = false;

  }

  // COMPONENT METHODS ---------------------------------------------------------

  selectTab(select: number) {

    switch (select) {
      case 1:

        this.createSelected = 'nav-link active';
        this.viewList = 'nav-link';
        this.createComponent = true;
        this.viewListComponent = false;

        break;
      case 2:

        this.viewList = 'nav-link active';
        this.createSelected = 'nav-link';
        this.createComponent = false;
        this.viewListComponent = true;

        break;
      default:
        break;
    }

  }

}
