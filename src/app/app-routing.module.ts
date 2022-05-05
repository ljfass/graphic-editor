import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'oop',
    loadChildren: () =>
      import('./pages/oop/oop.module').then((m) => m.OopModule),
  },
  { path: '', redirectTo: 'oop', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
