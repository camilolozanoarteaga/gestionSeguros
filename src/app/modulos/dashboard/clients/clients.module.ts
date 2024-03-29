import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Third-party modules
import { NgbModule, NgbAccordionModule, NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// Shared modules
import { SharedModule } from '../shared/shared.module';

// Components
import { ClientsComponent } from './container/clients/clients.component';
import { InformationClientComponent } from './components/information-client/information-client.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';
import { PoliciesComponent } from './components/policies/policies.component';



// Routes
export const ROUTES: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'update', component: UpdateClientComponent },
  { path: 'policies', component: PoliciesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    NgbModule, NgbAccordionModule, NgbDatepickerModule, NgbModalModule
  ],
  declarations: [ClientsComponent, InformationClientComponent, ListClientsComponent, UpdateClientComponent, PoliciesComponent]
})
export class ClientsModule { }
