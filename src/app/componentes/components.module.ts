import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModulo } from '../pipes/pipes.module';

/**
 * Referência do material:
 *    https://material.angular.io
 **/

@NgModule({
  declarations: [UserDetailsComponent, FilterComponent, UsersListComponent],
  imports: [FormsModule, AngularMaterialModule, PipesModulo],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
    PipesModulo,
  ],
})
export class ComponentsModule {}
