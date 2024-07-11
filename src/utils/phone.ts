/* eslint-disable regexp/prefer-d */
import parsePhoneNumber from 'libphonenumber-js'

export const normalizePhone = (phone: string) => {
  return phone
    .replace(/\s/g, '')
    .replace(/[^0-9]/g, '')
    .replace(/^8/, '7')
}

export const prettifyPhone = (phone: string) => {
  const normalizedPhone = normalizePhone(phone)
  const parsedPhoneNumber = parsePhoneNumber(normalizedPhone)
  return parsedPhoneNumber?.formatInternational() || normalizedPhone
}

export const validatePhone = (phone: string) => {
  const normalizedPhone = normalizePhone(phone)
  const parsedPhoneNumber = parsePhoneNumber(normalizedPhone)
  return parsedPhoneNumber?.isValid() || false
}
