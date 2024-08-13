export function getAnswerObj(answers: any[], answerValue: any) {
  var index = answers
  .map(function (e) {
    return e.answer
  })
  .indexOf(answerValue.value);
  return answers[index];
}
