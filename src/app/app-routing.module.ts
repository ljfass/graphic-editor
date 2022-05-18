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
      import('./pages/oop-model/oop-model.module').then(
        (m) => m.OopModelModule
      ),
  },
  { path: '', redirectTo: 'oopss', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
