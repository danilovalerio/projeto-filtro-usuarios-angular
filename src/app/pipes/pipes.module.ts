import { NgModule } from '@angular/core';
import { StatusClassPipe } from './status-class.pipe';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StatusClassPipe, PhonePipe, AddressPipe],
  exports: [StatusClassPipe, PhonePipe, AddressPipe, CommonModule],
})
export class PipesModulo {}
