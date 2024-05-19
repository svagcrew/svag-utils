import type { Truthey } from 'svag-types'

export const getRecordByCond = <TCondition, TValue extends Record<string, any>>(
  condition: TCondition,
  value: TValue
): TCondition extends Truthey<TCondition> ? TValue : {} => {
  return condition ? (value as any) : {}
}

export const getRecordIfTruthey = <TValue>(
  value: TValue
): TValue extends Truthey<TValue> ? NonNullable<TValue> : {} => {
  return value ? (value as any) : {}
}
