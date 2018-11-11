import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Third-party modules
import {NgbModule, NgbAccordionModule, NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';


// Shared modules
import { SharedModule } from '../shared/shared.module';

// Components
import { CreatePolicyComponent } from './components/create-policy/create-policy.component';


export const ROUTES: Routes = [
  { path: '', component: CreatePolicyComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    SharedModule.forRoot(),
    NgbModule,
    NgbAccordionModule,
    NgbDatepickerModule
  ],
  declarations: [CreatePolicyComponent]
})
export class PolicyModule { }
