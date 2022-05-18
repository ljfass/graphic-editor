import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OopModelRoutingModule } from './oop-model-routing.module';
import { IndexComponent } from './index/index.component';
import { TestComponent } from './pages/test/test.component';
import { CustomDirective } from './directive/custom.directive';
import { XuDirective } from './directive/xu.directive';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ChengDirective } from './directive/cheng.directive';
import { HelloComponent } from './directive/hello/hello.component';
import { FrameDirective } from './directive/frame.directive';
import { Demo1Component } from './pages/demo/demo1/demo1.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DemoComponent } from './pages/demo/demo.component';

@NgModule({
  declarations: [
    IndexComponent,
    TestComponent,
    CustomDirective,
    XuDirective,
    HelloComponent,
    ChengDirective,
    FrameDirective,
    Demo1Component,
    DemoComponent,
  ],
  imports: [
    CommonModule,
    OopModelRoutingModule,
    NzButtonModule,
    MatExpansionModule,
  ],
})
export class OopModelModule {}
