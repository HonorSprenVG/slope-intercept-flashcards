import { Component, Input } from '@angular/core'
import {
  ExType,
  getAnswerObj,
  getAnswersSet,
  getSiAsString,
  SlopeIntercept,
} from 'src/app/functions/slope-intercept'

@Component({
  selector: 'app-answerBlock',
  templateUrl: './answerBlock.component.html',
  styleUrls: ['./answerBlock.component.scss'],
})
export class AnswerBlockComponent {
  answerMessage = 'Select an answer'
  color='black'
  answers: any[] = []
  _si: SlopeIntercept | undefined
  selectedAnswer = '-1'
  @Input() set si(v: { si: SlopeIntercept; t: ExType; dispFn: Function }) {
    this._si = v.si
    this.answers = getAnswersSet(v)
    console.log('answers: ', this.answers)
    var index = this.answers
      .map(function (e) {
        return e.answer
      })
      .indexOf(true)
    console.log('answer index: ', index)
  }
  checkAnswer(e: any) {
    this.answerMessage = getAnswerObj(this.answers, e).message;
    if(this.answerMessage != 'Correct!'){this.color = 'red'}else{this.color='green'}
  }
  constructor() {}
}
