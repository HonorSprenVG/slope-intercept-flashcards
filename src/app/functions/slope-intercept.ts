export interface SlopeIntercept {b: number, m: number};
export interface XYPoint {x: number, y: number};
export enum ExType {'e','ge','le','g','l'};

export function getExType() {
  let pick = Math.round(Math.random()*5);
  let retVal:ExType;
  switch(pick) {
    case 1: {
      retVal = ExType.e;
      break;
    }
    case 2: {
      retVal = ExType.ge;
      break;
    }
    case 3: {
      retVal = ExType.le;
      break;
    }
    case 4: {
      retVal = ExType.g;
      break;
    }
    case 5: {
      retVal = ExType.l;
      break;
    }
    default:{retVal = ExType.e;}
  }
  return retVal;
}

export function solveForY(x: number, si: SlopeIntercept) {
 let y = si.m*x+si.b;
 return y;
}

export function generateRandomLine(){
  let si = {
    b: randNegNToN(5),
    m:randNegNToN(4),
  }
  return si;
}

export function generatePointOnTheLine(si:SlopeIntercept, check1?: XYPoint | undefined, check2?: XYPoint | undefined) {
  let point: XYPoint = {x:0, y:0};
  point.x = randNegNToN(5);
  point.y = solveForY(point.x, si);
  if(check1 && check2) {
    if((point.x === check1.x && point.y === check1.y) || (point.x === check2.x && point.y === check2.y)) {
      point = generatePointOnTheLine(si, check1, check2)
    }
  } else {
    if(check1) {
      if(point.x === check1.x && point.y === check1.y) {
        point = generatePointOnTheLine(si, check1, check2)
      }
    }
  }
  return point;
}

export function generatepointNotOnTheLine(si:SlopeIntercept) {
  let point: XYPoint = {x:0, y:0};
  point.x = randNegNToN(5);
  let modifier = randNegNToN(2);
  if(modifier === 0) {modifier = getSign()}
  point.y = solveForY(point.x, si) + modifier
  return point;
}

export function randNegNToN(n: number = 10) {
  let sign = getSign();
  return Math.round(Math.random()*n) * sign;
}

export function getSign() {
  if(Math.round(Math.random()) === 1){
    return 1;
  } else {
    return -1;
  }
}
