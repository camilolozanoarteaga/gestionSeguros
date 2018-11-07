import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Shared modules
import { SharedModule } from '../shared/shared.module';

// Components
import { LoginComponent } from './containers/login/login.component';
import { Routes, RouterModule } from '@angular/router';

// Routes
export const ROUTES: Routes = [
  { path: '', component: LoginComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
