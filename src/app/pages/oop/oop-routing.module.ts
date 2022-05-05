import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { OopComponent } from './oop.component';

const routes: Routes = [
  {
    path: 'editor',
    component: OopComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: '**',
    redirectTo: 'editor',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OopRoutingModule {}
