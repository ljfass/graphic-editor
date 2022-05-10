import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'oop',
    loadChildren: () =>
      import('./pages/oop/oop.module').then((m) => m.OopModule),
  },
  {
    path: 'oops',
    loadChildren: () =>
      import('./pages/oops/oops.module').then((m) => m.OopsModule),
  },
  {
    path: 'oopss',
    loadChildren: () =>
      import('./pages/oopss/oopss.module').then((m) => m.OopssModule),
  },
  { path: '', redirectTo: 'oops', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
