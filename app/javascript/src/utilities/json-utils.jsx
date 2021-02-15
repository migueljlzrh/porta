// @flow

// eslint-disable-next-line flowtype/no-weak-types
const toJsonString = (val: Object): string => JSON.stringify(val, null, 2)

const fromJsonString = <T>(json: string): T => JSON.parse(json)

const safeFromJsonString = <T>(json: string): (T | void) => {
  try {
    return fromJsonString<T>(json)
  } catch (err) {
    console.warn('That doesn\'t look like a valid json!', err)
    return undefined
  }
}

export {
  toJsonString,
  fromJsonString,
  safeFromJsonString
}
