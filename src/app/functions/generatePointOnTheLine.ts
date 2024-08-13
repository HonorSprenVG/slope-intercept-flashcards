import { randNegNToN, SlopeIntercept, solveForY, XYPoint } from "./"

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
