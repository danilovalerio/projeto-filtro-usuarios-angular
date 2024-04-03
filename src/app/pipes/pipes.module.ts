import { NgModule } from '@angular/core';
import { StatusClassPipe } from './status-class.pipe';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { CommonModule } from '@angular/common';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';

@NgModule({
  declarations: [StatusClassPipe, PhonePipe, AddressPipe, DashIfEmptyPipe],
  exports: [
    StatusClassPipe,
    PhonePipe,
    AddressPipe,
    CommonModule,
    DashIfEmptyPipe,
  ],
})
export class PipesModulo {}
