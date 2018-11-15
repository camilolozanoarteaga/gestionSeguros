import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import services
import { AdminUsersService } from './services/admin-users/admin-users.service';
import { AdminSysService } from './services/admin-sys/admin-sys.service';
import { ClientsService } from './services/clients/clients.service';
import { PolicyService } from './services/policy/policy.service';
import { ListService } from './services/list/list.service';

// external
import { SharedUserDataService } from '../admin-users/shared/shared-user-data.service';
import { SharedClientService } from '../clients/shared/shared-client.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AdminUsersService,
        AdminSysService,
        SharedUserDataService,
        ClientsService,
        SharedClientService,
        PolicyService,
        ListService
      ]
    };
  }
}
