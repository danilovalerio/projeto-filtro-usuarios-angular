import { NgModule } from '@angular/core';
import { StatusClassPipe } from './status-class.pipe';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';

@NgModule({
  declarations: [StatusClassPipe, PhonePipe, AddressPipe],
  exports: [StatusClassPipe, PhonePipe, AddressPipe],
})
export class PipesModulo {}
