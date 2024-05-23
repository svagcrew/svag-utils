import type { Truthey } from 'svag-types'

export const orThrow = <T>(value: T, message?: string): Truthey<T> => {
  if (value) {
    return value as Truthey<T>
  }
  throw new Error(message || 'Value is falsy')
}
