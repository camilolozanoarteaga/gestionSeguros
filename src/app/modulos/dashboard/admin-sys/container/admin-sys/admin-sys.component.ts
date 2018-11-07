import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sys',
  templateUrl: './admin-sys.component.html',
  styleUrls: ['./admin-sys.component.sass']
})
export class AdminSysComponent implements OnInit {

  // tabs select
  createSelected: string;
  viewList: string;

  createComponent: boolean;
  viewListComponent: boolean;

  constructor() { }
  
  // COMPONENT LIFECYCLE HOOKS -------------------------------------------------

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
