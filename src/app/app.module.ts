import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HighchartsChartModule} from 'highcharts-angular'
import { CartesianGraphComponent } from './components/CartesianGraph/CartesianGraph.component';
import { EquationFromGraphComponent } from './components/equation-from-graph/equation-from-graph.component';
import { AnswerBlockComponent } from './components/answerBlock/answerBlock.component';


@NgModule({
  declarations: [
    AppComponent,
    CartesianGraphComponent,
    EquationFromGraphComponent,
    AnswerBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
