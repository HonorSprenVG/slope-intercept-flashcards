import { Component } from '@angular/core'
import {
  ExType,
  generatePointOnTheLine,
  generateRandomLine,
  getExType,
  getSiAsString,
  solveForY,
  XYPoint,
} from 'src/app/functions'

@Component({
  selector: 'app-graphQuestionBase',
  templateUrl: './graphQuestionBase.component.html',
  styleUrls: ['./graphQuestionBase.component.scss']
})
export class GraphQuestionBaseComponent {

  title =
    'Which inequality does the following graph show the partial solution set for?'
  slopeIntercept = generateRandomLine()
  dispFn = getSiAsString
  threePoints: {
    point1: XYPoint | undefined
    point2: XYPoint | undefined
    point3: XYPoint | undefined
  } = {
    point1: undefined,
    point2: undefined,
    point3: undefined,
  }
  chartAnchors = {
    high: { x: 100, y: solveForY(100, this.slopeIntercept) },
    low: { x: -100, y: solveForY(-100, this.slopeIntercept) },
  }
  exType:ExType = ExType.e
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
