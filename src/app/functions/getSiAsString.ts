import { SlopeIntercept, ExType } from "./"

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
    m = si.m
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
