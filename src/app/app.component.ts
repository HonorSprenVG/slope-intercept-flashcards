import { Component } from '@angular/core'
import {
  generatePointOnTheLine,
  generateRandomLine,
  getExType,
  solveForY,
  XYPoint,
} from './functions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'slope-intercept-flashcards'
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
  chartAnchors = {
    high: { x: 100, y: solveForY(100, this.slopeIntercept) },
    low: { x: -100, y: solveForY(-100, this.slopeIntercept) },
  }
  exType = getExType()
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
  ready = true
  qType = 1;
  newQuestion() {
    this.ready = false
    this.qType = Math.ceil(Math.random()*3)
    setTimeout(() => {
      this.ready = true
    }, 100)
  }
}
