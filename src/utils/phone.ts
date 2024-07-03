/* eslint-disable regexp/prefer-d */
export const normalizePhone = (phone: string) => {
  return phone
    .replace(/\s/g, '')
    .replace(/[^0-9]/g, '')
    .replace(/^8/, '7')
}
