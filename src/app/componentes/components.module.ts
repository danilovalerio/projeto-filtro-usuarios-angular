import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';

/**
 * Referência do material:
 *    https://material.angular.io
 **/

@NgModule({
  declarations: [UserDetailsComponent, FilterComponent],
  imports: [FormsModule, AngularMaterialModule],
  exports: [UserDetailsComponent, FilterComponent],
})
export class ComponentsModule {}
