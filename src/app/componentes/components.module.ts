import { StatusClassPipe } from './../pipes/status-class.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';

/**
 * Referência do material:
 *    https://material.angular.io
 **/

@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
    StatusClassPipe,
  ],
  imports: [FormsModule, AngularMaterialModule],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
    StatusClassPipe,
  ],
})
export class ComponentsModule {}
