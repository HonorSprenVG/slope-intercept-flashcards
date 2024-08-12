import { Component, Input } from '@angular/core'
import {
  ExType,
  getSiAsString,
  SlopeIntercept,
} from 'src/app/functions/slope-intercept'

@Component({
  selector: 'app-answerBlock',
  templateUrl: './answerBlock.component.html',
  styleUrls: ['./answerBlock.component.scss'],
})
export class AnswerBlockComponent {
  answers: any[] = []
  _si: SlopeIntercept | undefined
  @Input() set si(v: { si: SlopeIntercept; t: ExType; qType: number }) {
    if (v.qType === 1) {
      this._si = v.si
      this.answers.push({
        si: v.si,
        answer: true,
        display: getSiAsString(v.si, v.t),
      })
      let mRec = {
        b: v.si.b,
        rise: v.si.run,
        run: v.si.rise,
        m: v.si.run / v.si.rise,
      }
      if (Math.abs(v.si.m) != 1) {
        this.answers.push({
          si: mRec,
          answer: false,
          display: getSiAsString(mRec, v.t),
        })
      }
      let negB = {
        b: v.si.b *-1,
        rise: v.si.rise,
        run: v.si.run,
        m: v.si.m,
      }
      this.answers.push({
        si: negB,
        answer: false,
        display: getSiAsString(negB, v.t)
      })
      console.log('answers', this.answers)
    }
  }

  constructor() {}
}
