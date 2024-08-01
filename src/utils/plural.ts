/* eslint-disable regexp/no-obscure-range */
/* eslint-disable no-irregular-whitespace */
export const plural = (number: number, titles: [string, string, string], returnCountValue: boolean = true) => {
  const lang = titles.some((value) => value.match(/[а-яА-Я]/)) ? 'ru' : 'other'
  if (lang === 'ru') {
    const cases = [2, 0, 1, 1, 1, 2]
    const formula = titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]
    return returnCountValue ? `${number} ${formula}` : formula
  } else {
    return returnCountValue ? `${number} ${number === 1 ? titles[0] : titles[1]}` : number === 1 ? titles[0] : titles[1]
  }
}
