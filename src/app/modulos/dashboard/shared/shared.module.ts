import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import services
import { AdminUsersService } from './services/admin-users/admin-users.service';
import { AdminSysService } from './services/admin-sys/admin-sys.service';

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
        AdminSysService
      ]
    };
  }
}
