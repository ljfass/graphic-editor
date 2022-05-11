import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomplishComponent } from './layout/accomplish/accomplish.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent,
  },
  {
    path: 'accomplish',
    component: AccomplishComponent,
  },
  {
    path: '**',
    redirectTo: 'layout',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OopsRoutingModule {}
