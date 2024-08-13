import { getSign, randNegNToN, SlopeIntercept, solveForY, XYPoint } from "./"

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
