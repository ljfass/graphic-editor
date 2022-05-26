import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DemoComponent } from '../oop/demo/demo.component';
import { IndexComponent } from './index/index.component';
import { Demo1Component } from './pages/demo/demo1/demo1.component';
// import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'demo',
    // component: Demo1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OopModelRoutingModule {}
