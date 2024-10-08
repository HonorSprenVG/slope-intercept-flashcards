import { Component, Input } from '@angular/core'
import {
  ExType,
  getAnswerObj,
  getAnswersSet,
  SlopeIntercept,
} from 'src/app/functions'

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
    var index = this.answers
      .map(function (e) {
        return e.answer
      })
      .indexOf(true)
  }
  checkAnswer(e: any) {
    this.answerMessage = getAnswerObj(this.answers, e).message;
    if(this.answerMessage != 'Correct!'){this.color = 'red'}else{this.color='green'}
  }
  constructor() {}
}
