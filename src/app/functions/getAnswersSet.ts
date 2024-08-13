import {
  SlopeIntercept,
  ExType,
  randNegNToN,
  getSign,
  shuffle,
  trimAnswers,
  getExType,
  exTypeToSign,
} from './'

export function getAnswersSet(v: {
  si: SlopeIntercept
  t: ExType
  dispFn: Function
}) {
  let answers: any[] = []

  // inverted rise/run
  if (Math.abs(v.si.m) != 1) {
    let mRec = {
      b: v.si.b,
      rise: v.si.run,
      run: v.si.rise,
      m: v.si.run / v.si.rise,
    }
    answers.push({
      si: mRec,
      answer: 'slopeReciprocal',
      display: v.dispFn(mRec, v.t),
      message:
        'You did run/rise instead of rise/run when determining your slope.',
    })
  }
  // wrong sign for y-intercept
  if (v.si.b != 0) {
    let wrongSignIntercept = v.si.b * -1
    let negB = {
      b: wrongSignIntercept,
      rise: v.si.rise,
      run: v.si.run,
      m: v.si.m,
    }
    answers.push({
      si: negB,
      answer: 'wrongSighForYintercept',
      display: v.dispFn(negB, v.t),
      message:
        'y-intercept was "' + v.si.b + '" not "' + wrongSignIntercept + '"',
    })
  }
  // improperly included y-intercept
  if (v.si.b == 0) {
    let badIntercept = v.si.b + randNegNToN(5)
    let badB = {
      b: badIntercept,
      rise: v.si.rise,
      run: v.si.run,
      m: v.si.m,
    }
    answers.push({
      si: badB,
      answer: 'noYintercept',
      display: v.dispFn(badB, v.t),
      message: 'The y intercept was "0", not ' + badIntercept,
    })
  }
  // improperly excluded y-intercept
  if (v.si.b != 0) {
    let badIntercept = 0
    let badB = {
      b: badIntercept,
      rise: v.si.rise,
      run: v.si.run,
      m: v.si.m,
    }
    answers.push({
      si: badB,
      answer: 'yInterceptExcluded',
      display: v.dispFn(badB, v.t),
      message: 'The y intercept was "' + v.si.b + '", not "0"',
    })
  }
  // wrong sign for slope
  if (v.si.m != 0) {
    let wrongSignSlope = v.si.m * -1
    let negM = {
      b: v.si.b,
      rise: v.si.rise * -1,
      run: v.si.run,
      m: wrongSignSlope,
    }
    answers.push({
      si: negM,
      answer: 'badSignForSlope',
      display: v.dispFn(negM, v.t),
      message: 'The slope was "' + v.si.m + '", not "' + wrongSignSlope + '"',
    })
  }
  // bad slope
  if (v.si.m != 0) {
    let addToSlope = getSign()
    let badSlope = v.si.m + addToSlope
    let badM = {
      b: v.si.b,
      rise: v.si.rise,
      run: v.si.run,
      m: badSlope,
    }
    answers.push({
      si: badM,
      answer: 'badSlope',
      display: v.dispFn(badM, v.t, addToSlope),
      message: 'The slope was "' + v.si.m + '", not "' + badSlope + '"',
    })
  }

  shuffle(answers)
  let trimToLen = Math.abs(randNegNToN(3) + getSign())
  if (v.t != ExType.e) {
    answers = trimAnswers(answers, trimToLen)
    //bad ineq
    let exclusions = [ExType.e, v.t]
    getBadineq(exclusions)
  }
  function getBadineq(exclusions: ExType[]) {
    let badIneq = getExType(exclusions)
    exclusions.push(badIneq)
    answers.push({
      si: v.si,
      answer: 'Inequality sign should be '+ exTypeToSign(v.t) + ', not '+ exTypeToSign(badIneq)+'.',
      display: v.dispFn(v.si, badIneq),
      message: 'Inequality sign should be '+ exTypeToSign(v.t) + ', not '+ exTypeToSign(badIneq)+'.',
    })
    if (answers.length < 3) {
      getBadineq(exclusions)
    }
  }

  answers = trimAnswers(answers)
  answers.push({
    si: v.si,
    answer: true,
    display: v.dispFn(v.si, v.t),
    message: 'Correct!',
  })
  shuffle(answers)

  return answers
}
