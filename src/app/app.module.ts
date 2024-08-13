import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HighchartsChartModule} from 'highcharts-angular'
import { CartesianGraphComponent } from './components/CartesianGraph/CartesianGraph.component';
import { EquationFromGraphComponent } from './components/equation-from-graph/equation-from-graph.component';
import { AnswerBlockComponent } from './components/answerBlock/answerBlock.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { InequalityFromGraphComponent } from './components/inequalityFromGraph/inequalityFromGraph.component';
import { GraphQuestionBaseComponent } from './components/graphQuestionBase/graphQuestionBase.component';
import { TableModule } from 'primeng/table';
import { TableOfPointsComponent } from './components/tableOfPoints/tableOfPoints.component';
import { EquationFromTableComponent } from './components/equation-from-table/equation-from-table.component';


@NgModule({
  declarations: [
    AppComponent,
    CartesianGraphComponent,
    EquationFromGraphComponent,
    GraphQuestionBaseComponent,
    AnswerBlockComponent,
    InequalityFromGraphComponent,
    TableOfPointsComponent,
    EquationFromTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    RadioButtonModule,
    FormsModule,
    TabViewModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
