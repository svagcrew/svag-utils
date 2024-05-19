import type { Truthey } from 'svag-types'

export const getTupleByCond = <TCondition, TValue>(
  condition: TCondition,
  value: TValue
): TCondition extends Truthey<TCondition> ? [TValue] : [] => {
  return condition ? ([value] as any) : []
}

export const getTupleIfTruthey = <TValue>(
  value: TValue
): TValue extends Truthey<TValue> ? [NonNullable<TValue>] : [] => {
  return value ? ([value] as any) : []
}
