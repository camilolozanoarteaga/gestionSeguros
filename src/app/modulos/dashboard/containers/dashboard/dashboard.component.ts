import { Component, OnInit } from '@angular/core';

import { NavItemInterface } from '../../models/nav-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  navItems: NavItemInterface[];

  constructor(public router: Router) { }

  // COMPONENT LIFECYCLE HOOKS -------------------------------------------------

  ngOnInit() {

    // Init main nav
    this.navItems = [{
      displayName: 'Administrar perfil',
      iconName: 'fa-user-circle',
      route: '/dashboard/admin-profile',
    }, {
      displayName: 'Registro de usuarios',
      iconName: 'fa-users',
      route: '/dashboard/register-users',
    }, {
      displayName: 'Administrar usuarios',
      iconName: 'fa-user',
      route: '/dashboard/admin-user',
    }, {
      displayName: 'Solicitudes pendientes',
      iconName: 'fa-book',
      route: '/dashboard/pending-requests',
    }, {
      displayName: 'Solicitudes tomadas',
      iconName: 'fa-list-alt',
      route: '/dashboard/taken-requests',
    }, {
      displayName: 'Reasignar solicitudes',
      iconName: 'fa-file',
      route: '/dashboard/reassign-request',
    }];

  }

  // COMPONENT METHODS ---------------------------------------------------------

  goBack() {

    this.router.navigate(['/dashboard/menu']);

  }

  // COMPONENT PRIVATE METHODS -------------------------------------------------


}
