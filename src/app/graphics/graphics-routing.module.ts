import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './pages/barchart/barchart.component';
import { BarchartdoubleComponent } from './pages/barchartdouble/barchartdouble.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { DonaComponent } from './pages/dona/dona.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'BarChart',
        component: BarchartComponent,
      },
      {
        path: 'BarChartDouble',
        component: BarchartdoubleComponent,
      },
      {
        path: 'Dona',
        component: DonaComponent,
      },
      {
        path: 'DonaHttp',
        component: DonaHttpComponent,
      },
      {
        path: '**',
        redirectTo: 'BarChart',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphicsRoutingModule {}
