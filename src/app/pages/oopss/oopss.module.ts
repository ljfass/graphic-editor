import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OopssRoutingModule } from './oopss-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    OopssRoutingModule
  ]
})
export class OopssModule { }
