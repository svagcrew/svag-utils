import lodashOmit from 'lodash/omit.js'

export const omit = <TObject extends Object, TKeys extends keyof TObject>(
  obj: TObject,
  keys: TKeys[]
): Omit<TObject, TKeys> => {
  return lodashOmit(obj, keys)
}
