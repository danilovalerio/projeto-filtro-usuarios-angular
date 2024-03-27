import { NgModule } from '@angular/core';
import { StatusClassPipe } from './status-class.pipe';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [StatusClassPipe, PhonePipe],
  exports: [StatusClassPipe, PhonePipe],
})
export class PipesModulo {}
