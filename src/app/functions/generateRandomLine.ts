import { getSign, randNegNToN, SlopeIntercept } from "./"

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
