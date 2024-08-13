import { ExType } from './'

export function getExType(exclude?: ExType[]): ExType {
  let pick = Math.round(Math.random() * 4)
  let retVal: ExType
  switch (pick) {
    case 0: {
      retVal = ExType.e
      break
    }
    case 1: {
      retVal = ExType.ge
      break
    }
    case 2: {
      retVal = ExType.le
      break
    }
    case 3: {
      retVal = ExType.g
      break
    }
    case 4: {
      retVal = ExType.l
      break
    }
    default: {
      retVal = ExType.e
    }
  }
  if (exclude && exclude.includes(retVal)) {
    retVal = getExType(exclude)
  }

  return retVal
}

export function exTypeToSign(t: ExType) {
  let retVal: string
  switch (t) {
    case 0: {
      retVal = '='
      break
    }
    case 1: {
      retVal = '≥'
      break
    }
    case 2: {
      retVal = '≤'
      break
    }
    case 3: {
      retVal = '>'
      break
    }
    case 4: {
      retVal = '<'
      break
    }
    default: {
      retVal = '='
    }
  }
  return retVal
}
