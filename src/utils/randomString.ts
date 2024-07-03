import generator from 'generate-password'

export const getRandomString = ({
  length,
  uppercase,
  lowercase,
  symbols = false,
  numbers = true,
  readable = true,
}: {
  length: number
  uppercase?: boolean
  lowercase?: boolean
  symbols?: boolean
  numbers?: boolean
  readable?: boolean
}) => {
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
