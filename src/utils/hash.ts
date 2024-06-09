/* eslint-disable unicorn/prefer-code-point */
/* eslint-disable no-bitwise */
// https://stackoverflow.com/a/7616484/3914847
const getHashFromString = (str: string) => {
  let chr
  let hash = 0
  let i
  if (str.length === 0) return hash
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash = Math.trunc(hash) // Convert to 32bit integer
  }
  return hash
}

type SerializablePrimitive = string | number | boolean | null | undefined
type SerializableRecord = { [key: string]: Serializable }
type SerializableArray = Serializable[]
type Serializable = SerializablePrimitive | SerializableRecord | SerializableArray
export const getHash = (value: Serializable) => {
  return getHashFromString(JSON.stringify(value))
}
