import { SlopeIntercept } from "./"

export function solveForY(x: number, si: SlopeIntercept) {
  let y = si.m * x + si.b
  return y
}
