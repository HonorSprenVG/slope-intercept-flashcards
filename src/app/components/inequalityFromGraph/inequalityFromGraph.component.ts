import { Component } from '@angular/core'
import {
  ExType,
  getExType,
} from 'src/app/functions'
import { GraphQuestionBaseComponent } from '../graphQuestionBase/graphQuestionBase.component'

@Component({
  selector: 'app-inequalityFromGraph',
  templateUrl: '../graphQuestionBase/graphQuestionBase.component.html',
  styleUrls: ['../graphQuestionBase/graphQuestionBase.component.scss'],
})
export class InequalityFromGraphComponent extends GraphQuestionBaseComponent {
  override exType = getExType([ExType.e])
  constructor() {
    super()
  }
}
