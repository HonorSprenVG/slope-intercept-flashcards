export interface SlopeIntercept {
  b: number
  m: number
  rise: number
  run: number
}
export interface XYPoint {
  x: number
  y: number
}
export enum ExType {
  'e',
  'ge',
  'le',
  'g',
  'l',
}

export function getExType() {
  let pick = Math.round(Math.random() * 5)
  let retVal: ExType
  switch (pick) {
    case 1: {
      retVal = ExType.e
      break
    }
    case 2: {
      retVal = ExType.ge
      break
    }
    case 3: {
      retVal = ExType.le
      break
    }
    case 4: {
      retVal = ExType.g
      break
    }
    case 5: {
      retVal = ExType.l
      break
    }
    default: {
      retVal = ExType.e
    }
  }
  return retVal
}

export function solveForY(x: number, si: SlopeIntercept) {
  let y = si.m * x + si.b
  return y
}

export function generateRandomLine(): SlopeIntercept {
  let run = randNegNToN(4)
  if (run == 0) {
    run = run + getSign()
  }
  let rise = randNegNToN(randNegNToN(Math.abs(run) - 1))
  if (rise == 0) {
    if (Math.abs(randNegNToN(100)) < 99) {
      let ri = rise + getSign()
      return {
        b: randNegNToN(5),
        m: ri / run,
        rise: ri,
        run: run,
      }
    } else {
      return {
        b: randNegNToN(5),
        m: rise / run,
        rise: rise,
        run: run,
      }
    }
  } else {
    return {
      b: randNegNToN(5),
      m: rise / run,
      rise: rise,
      run: run,
    }
  }
}

export function generatePointOnTheLine(
  si: SlopeIntercept,
  check1?: XYPoint | undefined,
  check2?: XYPoint | undefined,
) {
  let point: XYPoint = { x: 0, y: 0 }
  point.x = randNegNToN(5)
  point.y = solveForY(point.x, si)
  if (check1 && check2) {
    if (
      (point.x === check1.x && point.y === check1.y) ||
      (point.x === check2.x && point.y === check2.y)
    ) {
      point = generatePointOnTheLine(si, check1, check2)
    }
  } else {
    if (check1) {
      if (point.x === check1.x && point.y === check1.y) {
        point = generatePointOnTheLine(si, check1, check2)
      }
    }
  }
  return point
}

export function generatepointNotOnTheLine(si: SlopeIntercept) {
  let point: XYPoint = { x: 0, y: 0 }
  point.x = randNegNToN(5)
  let modifier = randNegNToN(2)
  if (modifier === 0) {
    modifier = getSign()
  }
  point.y = solveForY(point.x, si) + modifier
  return point
}

export function randNegNToN(n: number = 10) {
  let sign = getSign()
  return Math.round(Math.random() * n) * sign
}

export function getSign() {
  if (Math.round(Math.random()) === 1) {
    return 1
  } else {
    return -1
  }
}

export function getSiAsString(
  si: SlopeIntercept,
  type: ExType,
  addToSlope: number = 0,
) {
  let m
  let tehRise = si.rise
  if (addToSlope != 0) {
    tehRise = si.rise + si.run * addToSlope
  }
  let intCheck = Number.isInteger(si.m)
  if (intCheck) {
    m = si.m + addToSlope
  } else {
    let rise = tehRise
    let run = si.run
    if (rise < 0 || run < 0) {
      if (rise < 0 && run < 0) {
        m = Math.abs(tehRise) + '/' + Math.abs(si.run)
      } else {
        m = '-' + Math.abs(tehRise) + '/' + Math.abs(si.run)
      }
    } else {
      m = tehRise + '/' + si.run
    }
  }

  let bSign = '+'
  if (si.b < 0) {
    bSign = '-'
  }
  let b = Math.abs(si.b).toString()
  if(si.b==0){
    bSign = '';
    b=''
  }
  if(si.m==1){
    m='';
  }
  let mxplusb = m + 'x ' + bSign + ' ' + b
  return type === ExType.e
    ? 'y = ' + mxplusb
    : type === ExType.ge
    ? 'y ≥ ' + mxplusb
    : type === ExType.le
    ? 'y ≤ ' + mxplusb
    : type === ExType.g
    ? 'y > ' + mxplusb
    : type === ExType.l
    ? 'y < ' + mxplusb
    : ''
}

export function shuffle(array: any[]) {
  let currentIndex = array.length

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
}

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

  function trimAnswers(ans: any[]): any[] {
    if (ans.length > 3) {
      ans = ans.slice(0, -1)
    }
    if (ans.length > 3) {
      ans = trimAnswers(ans)
    }
    return ans
  }

  shuffle(answers)
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

export function getAnswerObj(answers: any[], answerValue: any) {
  var index = answers
  .map(function (e) {
    return e.answer
  })
  .indexOf(answerValue.value);
  return answers[index];
}
