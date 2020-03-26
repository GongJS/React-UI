export const firstDayOfMonth = (date: Date) => {
  let [year, month] = getYearMonthDate(date)
  return new Date(year, month, 1)
}

export const getYearMonthDate = (date: Date) => {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return [year, month, day]
}

export const addMonth = (date: Date, n: number) => {
  const month = getYearMonthDate(date)[1]
  const newMonth = month + n
  const copy = new Date(date)
  copy.setMonth(newMonth)
  return copy
}
export const addYear = (date: Date, n: number) => {
  const [year] = getYearMonthDate(date)
  const newYear = year + n
  const copy = new Date(date)
  copy.setFullYear(newYear)
  return copy
}

export const formateDecade = (month: number) => {
  return (month >= 10 ? '' : '0') + month
}

export const rangeYear = (start: number) => {
  const arr = []
  for (let i = start; i < start + 12; i++) {
    arr.push(i)
  }
  return arr
}
