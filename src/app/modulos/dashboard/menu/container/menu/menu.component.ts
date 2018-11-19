import { Component, OnInit } from '@angular/core';
import { NavItemInterface } from '../../../models/nav-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  navItems: NavItemInterface[];

  constructor(public router: Router) { }

  // COMPONENT LIFECYCLE HOOKS -------------------------------------------------

  ngOnInit() {

    this.navItems = [{
      displayName: 'Administrar perfil',
      description: 'Ingrese y administre los usuarios usuarios',
      iconName: 'fa fa-user-circle',
      route: '/dashboard/admin-profile',
    }, {
      displayName: 'Opciones del sistema',
      description: 'Ingrese y administre las opciones del sistema',
      iconName: 'fa fa-wrench',
      route: '/dashboard/admin-sys',
    }, {
      displayName: 'Administrar usuarios',
      description: 'Ingrese y adminstre nuevos usuarios',
      iconName: 'fa fa-users',
      route: '/dashboard/admin-users',
    }, {
      displayName: 'Administrar clientes',
      description: 'Ingrese y administre la información de los clientes',
      iconName: 'fa fa-address-book',
      route: '/dashboard/clients',
    }, {
      displayName: 'Crear póliza',
      description: 'Ingrese y cree una nueva poliza',
      iconName: 'fa fa-book',
      route: '/dashboard/policy',
    }];

  }

  // COMPONENT METHODS ---------------------------------------------------------

  goPath(route: string) {

    this.router.navigate([route]);

  }

  // COMPONENT PRIVATE METHODS -------------------------------------------------



}
