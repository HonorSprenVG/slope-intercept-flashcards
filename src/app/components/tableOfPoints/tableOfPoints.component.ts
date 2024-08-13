import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-tableOfPoints',
  templateUrl: './tableOfPoints.component.html',
  styleUrls: ['./tableOfPoints.component.css'],
})
export class TableOfPointsComponent {
  _threePoints: any[] = [{}, {}]
  get threePoints(): any {
    return this._threePoints
  }
  @Input() set threePoints(val: any) {
    this._threePoints[0].rowHead='x'
    this._threePoints[0].one=val.point1.x;
    this._threePoints[0].two=val.point2.x;
    this._threePoints[0].three=val.point3.x;
    this._threePoints[1].rowHead='y'
    this._threePoints[1].one=val.point1.y;
    this._threePoints[1].two=val.point2.y;
    this._threePoints[1].three=val.point3.y;
  }
}
