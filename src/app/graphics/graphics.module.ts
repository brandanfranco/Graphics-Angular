import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarchartComponent } from './pages/barchart/barchart.component';
import { BarchartdoubleComponent } from './pages/barchartdouble/barchartdouble.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraphicsBarComponent } from './components/graphics-bar/graphics-bar.component';

@NgModule({
  declarations: [
    BarchartComponent,
    BarchartdoubleComponent,
    DonaComponent,
    DonaHttpComponent,
    GraphicsBarComponent,
  ],
  imports: [CommonModule, GraphicsRoutingModule, NgChartsModule],
})
export class GraphicsModule {}
