import React, { useState, useRef } from 'react'
import {
  firstDayOfMonth,
  formateDecade,
  getYearMonthDate,
  addMonth,
  addYear,
  rangeYear,
} from './utils'
import { prefixClass, combineClass } from '../../helpers/utils'
import Input from '../input'
import Icon from '../icon'
import Popover from '../popover'
import './date-picker.scss'

interface DatePickerProps {
  value?: Date
  defaultValue?: Date
  onChange?: (value: Date) => any
  onClose?: () => any
}

const pre = prefixClass('r-date-picker')
const DatePicker: React.FC<DatePickerProps> = props => {
  const { value, defaultValue, onChange, onClose } = props
  const popRef = useRef<any>()
  const [type, setType] = useState<string>('day')
  const [display, setDisplay] = useState(() => ({
    year:
      (defaultValue && defaultValue.getFullYear()) || new Date().getFullYear(),
    month: (defaultValue && defaultValue.getMonth()) || new Date().getMonth(),
  }))
  const [startYear, setStartYear] = useState(() => {
    return getYearMonthDate(new Date())[0]
  })

  const visibleDays = () => {
    let date = new Date(display.year, display.month, 1)
    let first = firstDayOfMonth(date)
    let n = first.getDay()
    let array: Date[] = []
    let x = first.getTime() - (n === 0 ? 6 : n - 1) * 3600 * 24 * 1000
    for (let i = 0; i < 42; i++) {
      array.push(new Date(x + i * 3600 * 24 * 1000))
    }
    return array
  }

  const getVisibleDay = (row: number, col: number) => {
    return visibleDays()[row * 7 + col]
  }

  const isCurrentMonth = (date: Date, n?: number) => {
    let [year1, month1] = getYearMonthDate(date)
    return year1 === display.year && month1 === display.month
  }

  const isToday = (date: Date) => {
    let [y, m, d] = getYearMonthDate(date)
    let [y2, m2, d2] = getYearMonthDate(new Date())
    return y === y2 && m === m2 && d === d2
  }
  const isSelected = (date: Date) => {
    let [y2, m2, d2] = getYearMonthDate(date)
    if (value) {
      let [y, m, d] = getYearMonthDate(value)
      return y === y2 && m === m2 && d === d2
    }
    if (defaultValue) {
      let [y, m, d] = getYearMonthDate(date)
      return y === y2 && m === m2 && d === d2
    }
    let [y, m, d] = getYearMonthDate(new Date())
    return y === y2 && m === m2 && d === d2
  }
  const handleClickPreYear = () => {
    if (type === 'year') {
      setStartYear(startYear - 12)
      return
    }
    const oldDate = new Date(display.year, display.month)
    const newDate = addYear(oldDate, -1)
    const [year, month] = getYearMonthDate(newDate)
    setDisplay({ year, month })
  }

  const handleClickPreMonth = () => {
    const oldDate = new Date(display.year, display.month)
    const newDate = addMonth(oldDate, -1)
    const [year, month] = getYearMonthDate(newDate)
    setDisplay({ year, month })
  }

  const handleClickNextMonth = () => {
    const oldDate = new Date(display.year, display.month)
    const newDate = addMonth(oldDate, 1)
    const [year, month] = getYearMonthDate(newDate)
    setDisplay({ year, month })
  }

  const handleClickNextYear = () => {
    if (type === 'year') {
      setStartYear(startYear + 12)
      return
    }
    const oldDate = new Date(display.year, display.month)
    const newDate = addYear(oldDate, 1)
    const [year, month] = getYearMonthDate(newDate)
    setDisplay({ year, month })
  }

  const handleClickCell = (date: Date) => {
    if (isCurrentMonth(date)) {
      onChange && onChange(date)
      popRef!.current!.close()
      onClose && onClose()
    }
  }

  const formateValue = () => {
    const [year, month, day] = getYearMonthDate(
      value || defaultValue || new Date(),
    )
    return `${year}-${formateDecade(month + 1)}-${formateDecade(day)}`
  }

  const handleSetToday = () => {
    const date = new Date()
    onChange && onChange(date)
    const [year, month] = getYearMonthDate(date)
    setDisplay({ year, month })
    popRef!.current!.close()
  }

  const selectMonth = (month: number) => {
    setDisplay({ year: display.year, month })
    setType('day')
  }

  const selectYear = (year: number) => {
    setDisplay({ year, month: display.month })
    setType('day')
  }

  const datePickerCon = (
    <div className={pre()}>
      <div className={pre('head')}>
        <div>
          <Icon
            name="doubleleft"
            color="#45526b"
            size="14px"
            onClick={handleClickPreYear}
          />
          {type === 'day' && (
            <Icon
              name="left"
              color="#45526b"
              size="14px"
              onClick={handleClickPreMonth}
            />
          )}
        </div>
        {type === 'day' ? (
          <div className={pre('head-introduce')}>
            <span onClick={() => setType('year')}>{display.year}年</span>
            <span onClick={() => setType('month')}>{display.month + 1}月</span>
          </div>
        ) : type === 'year' ? (
          <span style={{ fontWeight: 'bold' }}>
            {startYear}-{startYear + 1}
          </span>
        ) : (
          <span style={{ fontWeight: 'bold' }}>{display.year}</span>
        )}
        <div>
          {type === 'day' && (
            <Icon
              name="right"
              color="#45526b"
              size="14px"
              onClick={handleClickNextMonth}
            />
          )}
          <Icon
            name="doubleright"
            color="#45526b"
            size="14px"
            onClick={handleClickNextYear}
          />
        </div>
      </div>
      <div className={pre('panels')}>
        {type !== 'day' &&
          Array.from({ length: 4 }, (v, k) => k).map(i => (
            <div key={i} className={pre('panels-year')}>
              {Array.from({ length: 3 }, (v, k) => k).map(j =>
                type === 'year' ? (
                  <span
                    key={j}
                    onClick={() => selectYear(rangeYear(startYear)[3 * i + j])}
                    className={
                      rangeYear(startYear)[3 * i + j] === display.year
                        ? 'selected'
                        : ''
                    }
                  >
                    {rangeYear(startYear)[3 * i + j]}
                  </span>
                ) : (
                  <span
                    key={j}
                    onClick={() => selectMonth(i * 3 + j)}
                    className={i * 3 + j === display.month ? 'selected' : ''}
                  >
                    {
                      [
                        '一月',
                        '二月',
                        '三月',
                        '四月',
                        '五月',
                        '六月',
                        '七月',
                        '八月',
                        '九月',
                        '十月',
                        '十一月',
                        '十二月',
                      ][3 * i + j]
                    }
                  </span>
                ),
              )}
            </div>
          ))}
        {type === 'day' && (
          <>
            <div className={combineClass(pre('panels-day'), 'head')}>
              {['一', '二', '三', '四', '五', '六', '日'].map(v => (
                <span key={v}>{v}</span>
              ))}
            </div>
            {Array.from({ length: 6 }, (v, k) => k).map(i => (
              <div key={i} className={pre('panels-day')}>
                {Array.from({ length: 7 }, (v, k) => k).map(j => (
                  <span
                    key={j}
                    className={combineClass(
                      isCurrentMonth(getVisibleDay(i, j))
                        ? 'current'
                        : 'not-current',
                      isToday(getVisibleDay(i, j)) ? 'is-today' : '',
                      isSelected(getVisibleDay(i, j)) ? 'selected' : '',
                    )}
                    onClick={() => handleClickCell(getVisibleDay(i, j))}
                  >
                    {getVisibleDay(i, j) && getVisibleDay(i, j).getDate()}
                  </span>
                ))}
              </div>
            ))}
            <div className={pre('panels-day-footer')} onClick={handleSetToday}>
              今天
            </div>
          </>
        )}
      </div>
    </div>
  )
  return (
    <Popover
      content={datePickerCon}
      position="bottom"
      wrapperStyle={{ marginRight: '20px' }}
      trigger="click"
      ref={popRef}
    >
      <Input value={formateValue()} sufIcon="calendar" />
    </Popover>
  )
}

DatePicker.displayName = 'DatePicker'
export default DatePicker
