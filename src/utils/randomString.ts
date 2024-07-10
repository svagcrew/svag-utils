import generator from 'generate-password'

export const getRandomString = ({
  length,
  uppercase,
  lowercase,
  symbols = false,
  numbersOnly = false,
  numbers = true,
  readable = true,
}: {
  length: number
  uppercase?: boolean
  lowercase?: boolean
  symbols?: boolean
  numbersOnly?: boolean
  numbers?: boolean
  readable?: boolean
}) => {
  if (numbersOnly) {
    let result = ''
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10) // Random digit between 0 and 9
    }
    return result
  }
  const result = generator.generate({
    length,
    numbers,
    uppercase: true, // use uppercase letters
    symbols,
    excludeSimilarCharacters: readable,
  })
  if (uppercase) {
    return result.toUpperCase()
  }
  if (lowercase) {
    return result.toLowerCase()
  }
  return result
}
