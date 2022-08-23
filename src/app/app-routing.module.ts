import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { GraphicsModule } from './graphics/graphics.module';

const routes: Routes = [
  {
    path: 'Graphics',
    loadChildren: () =>
      import('./graphics/graphics.module').then((m) => m.GraphicsModule),
  },

  {
    path: '**',
    redirectTo: 'Graphics',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
