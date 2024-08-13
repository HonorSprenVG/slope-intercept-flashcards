import { getSign } from "./"

export function randNegNToN(n: number = 10) {
  let sign = getSign()
  return Math.round(Math.random() * n) * sign
}
