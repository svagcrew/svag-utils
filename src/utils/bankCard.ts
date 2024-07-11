export const normalizeBankCard = (bankCard: string) => {
  return bankCard.replace(/\s/g, '').replace(/\D/g, '')
}

export const validateBankCardByLuhn = (bankCard: string) => {
  const normalizedBankCard = normalizeBankCard(bankCard)
  let nCheck = 0
  let bEven = false
  for (let n = normalizedBankCard.length - 1; n >= 0; n--) {
    const cDigit = normalizedBankCard.charAt(n)
    let nDigit = parseInt(cDigit, 10)
    if (bEven && (nDigit *= 2) > 9) nDigit -= 9
    nCheck += nDigit
    bEven = !bEven
  }
  return nCheck % 10 === 0
}

export const prettifyBankCard = (bankCard: string) => {
  const normalizedBankCard = normalizeBankCard(bankCard)
  return normalizedBankCard.replace(/(.{4})/g, '$1 ').trim()
}
