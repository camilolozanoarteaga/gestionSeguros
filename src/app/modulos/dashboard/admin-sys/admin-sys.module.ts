import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Third-party modules
import {NgbModule, NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';

// Shared modules
import { SharedModule } from '../shared/shared.module';

// components
import { AdminSysComponent } from './container/admin-sys/admin-sys.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { SafesComponent } from './components/safes/safes.component';

export const ROUTES: Routes = [
  { path: '', component: AdminSysComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    SharedModule.forRoot(),
    NgbModule, NgbAccordionModule
  ],
  declarations: [AdminSysComponent, CompaniesComponent, SafesComponent]
})
export class AdminSysModule { }
