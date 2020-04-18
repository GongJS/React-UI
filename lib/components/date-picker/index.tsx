import React, {useState, useRef} from 'react';
import {
  firstDayOfMonth,
  formateDecade,
  getYearMonthDate,
  addMonth,
  addYear,
  rangeYear,
} from './utils';
import {prefixClass, combineClass} from '../../helpers/utils';
import Input from '../input';
import Icon from '../icon';
import Popover from '../popover';
import './date-picker.scss';

interface Props {
  value: Date
  defaultValue: Date
  onChange: (value: Date) => any
  onClose: () => any
}

type DatePickerProps = Partial<Props>

const pre = prefixClass('r-date-picker');
const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
const weeks = ['一', '二', '三', '四', '五', '六', '日'];

const DatePicker: React.FC<DatePickerProps> = props => {
  const {value, defaultValue, onChange, onClose} = props;
  const popRef = useRef<any>();
  const [type, setType] = useState<string>('day');
  const [display, setDisplay] = useState(() => ({
    year:
      (defaultValue && defaultValue.getFullYear()) || new Date().getFullYear(),
    month: (defaultValue && defaultValue.getMonth()) || new Date().getMonth(),
  }));
  const [startYear, setStartYear] = useState(() => {
    return getYearMonthDate(new Date())[0];
  });

  const visibleDays = () => {
    const date = new Date(display.year, display.month, 1);
    const first = firstDayOfMonth(date);
    const n = first.getDay();
    const array: Date[] = [];
    const x = first.getTime() - (n === 0 ? 6 : n - 1) * 3600 * 24 * 1000;
    for (let i = 0; i < 42; i++) {
      array.push(new Date(x + i * 3600 * 24 * 1000));
    }
    return array;
  };

  const getVisibleDay = (row: number, col: number) => {
    return visibleDays()[row * 7 + col];
  };

  const isCurrentMonth = (date: Date, n?: number) => {
    const [year1, month1] = getYearMonthDate(date);
    return year1 === display.year && month1 === display.month;
  };

  const isToday = (date: Date) => {
    const [y, m, d] = getYearMonthDate(date);
    const [y2, m2, d2] = getYearMonthDate(new Date());
    return y === y2 && m === m2 && d === d2;
  };

  const isSelected = (date: Date) => {
    const [y2, m2, d2] = getYearMonthDate(date);
    if (value) {
      const [y, m, d] = getYearMonthDate(value);
      return y === y2 && m === m2 && d === d2;
    }
    if (defaultValue) {
      const [y, m, d] = getYearMonthDate(date);
      return y === y2 && m === m2 && d === d2;
    }
    const [y, m, d] = getYearMonthDate(new Date());
    return y === y2 && m === m2 && d === d2;
  };

  const handleClickPreYear = () => {
    if (type === 'year') {
      setStartYear(startYear - 12);
      return;
    }
    const oldDate = new Date(display.year, display.month);
    const newDate = addYear(oldDate, -1);
    const [year, month] = getYearMonthDate(newDate);
    setDisplay({year, month});
  };

  const handleClickPreMonth = () => {
    const oldDate = new Date(display.year, display.month);
    const newDate = addMonth(oldDate, -1);
    const [year, month] = getYearMonthDate(newDate);
    setDisplay({year, month});
  };

  const handleClickNextMonth = () => {
    const oldDate = new Date(display.year, display.month);
    const newDate = addMonth(oldDate, 1);
    const [year, month] = getYearMonthDate(newDate);
    setDisplay({year, month});
  };

  const handleClickNextYear = () => {
    if (type === 'year') {
      setStartYear(startYear + 12);
      return;
    }
    const oldDate = new Date(display.year, display.month);
    const newDate = addYear(oldDate, 1);
    const [year, month] = getYearMonthDate(newDate);
    setDisplay({year, month});
  };

  const handleClickCell = (date: Date) => {
    if (isCurrentMonth(date)) {
      onChange && onChange(date);
      popRef!.current!.close();
      onClose && onClose();
    }
  };

  const formateValue = () => {
    const [year, month, day] = getYearMonthDate(
      value || defaultValue || new Date(),
    );
    return `${year}-${formateDecade(month + 1)}-${formateDecade(day)}`;
  };

  const handleSetToday = () => {
    const date = new Date();
    onChange && onChange(date);
    const [year, month] = getYearMonthDate(date);
    setDisplay({year, month});
    popRef!.current!.close();
  };

  const selectMonth = (month: number) => {
    setDisplay({year: display.year, month});
    setType('day');
  };

  const selectYear = (year: number) => {
    setDisplay({year, month: display.month});
    setType('day');
  };

  const getIcon = (iconName: string, fn: () => any) => {
    return (
      <Icon
        name={name}
        color="#45526b"
        size="14px"
        onClick={fn}
      />
    );
  };
  const datePickerContent = (
    <div className={pre()}>
      <div className={pre('head')}>
        <div>
          {getIcon('doubleleft', handleClickPreYear)}
          {type === 'day' && getIcon('left', handleClickPreMonth)}
        </div>
        {type === 'day' ? (
          <div className={pre('head-introduce')}>
            <span onClick={() => setType('year')}>{display.year}年</span>
            <span onClick={() => setType('month')}>{display.month + 1}月</span>
          </div>
        ) : type === 'year' ? (
          <span style={{fontWeight: 'bold'}}>
            {startYear}-{startYear + 1}
          </span>
        ) : (
          <span style={{fontWeight: 'bold'}}>{display.year}</span>
        )}
        <div>
          {type === 'day' && getIcon('right', handleClickNextMonth)}
          {getIcon('doubleright', handleClickNextYear)}
        </div>
      </div>
      <div className={pre('panels')}>
        {type !== 'day' &&
        Array.from({length: 4}, (v, k) => k).map(i => (
          <div key={i} className={pre('panels-year')}>
            {Array.from({length: 3}, (v, k) => k).map(j =>
              type === 'year' ? (
                <span
                  key={j}
                  onClick={() => selectYear(rangeYear(startYear)[3 * i + j])}
                  className={
                    rangeYear(startYear)[3 * i + j] === display.year ? 'selected' : ''
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
                    {months[3 * i + j]}
                </span>
              ),
            )}
          </div>
        ))}
        {type === 'day' && (
          <>
            <div className={combineClass(pre('panels-day'), 'head')}>
              {weeks.map(v => (
                <span key={v}>{v}</span>
              ))}
            </div>
            {Array.from({length: 6}, (v, k) => k).map(i => (
              <div key={i} className={pre('panels-day')}>
                {Array.from({length: 7}, (v, k) => k).map(j => (
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
  );
  return (
    <Popover
      content={datePickerContent}
      position="bottom"
      wrapperStyle={{marginRight: '20px'}}
      trigger="click"
      ref={popRef}
    >
      <Input value={formateValue()} sufIcon="calendar"/>
    </Popover>
  );
};

DatePicker.displayName = 'DatePicker';
export default DatePicker;
