import { Component } from '@angular/core';
import { ExType, generatePointOnTheLine, generateRandomLine, getSiAsString, XYPoint } from 'src/app/functions';

@Component({
  selector: 'app-equation-from-table',
  templateUrl: './equation-from-table.component.html',
  styleUrls: ['./equation-from-table.component.scss']
})
export class EquationFromTableComponent{
  title="The following table shows a partial set of solutions for a linear equality:"
  question="Which linear equation represents the complete solution set?"
  dispFn = getSiAsString
  exType:ExType = ExType.e
  slopeIntercept = generateRandomLine()
  threePoints: {
    point1: XYPoint | undefined
    point2: XYPoint | undefined
    point3: XYPoint | undefined
  } = {
    point1: undefined,
    point2: undefined,
    point3: undefined,
  }
  constructor() {
    this.threePoints.point1 = generatePointOnTheLine(this.slopeIntercept)
    this.threePoints.point2 = generatePointOnTheLine(
      this.slopeIntercept,
      this.threePoints.point1,
    )
    this.threePoints.point3 = generatePointOnTheLine(
      this.slopeIntercept,
      this.threePoints.point1,
      this.threePoints.point2,
    )
   }

}
