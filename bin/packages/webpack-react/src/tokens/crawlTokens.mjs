import { checkIsToken } from './checkIsToken.mjs'
import { transformMap } from './constants.mjs'

function crawlTokens(obj, key, transformMapKey, path = [key], tokens = []) {
  let mutableTokens = tokens
  let value = obj[key]
  if (typeof value === 'object' && !checkIsToken(value)) {
    let keys = Object.keys(value)
    for (const vKey of keys) {
      const nextPath = [...path, vKey]
      crawlTokens(value, vKey, transformMapKey, nextPath, mutableTokens)
    }
  } else if (typeof value === 'object' && checkIsToken(value)) {
    mutableTokens.push(transformMap[transformMapKey](value, path))
  }
  return mutableTokens
}

export { crawlTokens }
