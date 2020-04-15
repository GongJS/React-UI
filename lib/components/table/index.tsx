import React, { useEffect, useState, ReactText, useRef } from 'react'
import { combineClass } from '../../helpers/utils'
import Icon from '../icon'
import './table.scss'

interface column {
  text: string
  field: string
  sorter?: (a: any, b: any) => any
  width?: number
  fixed?: string
  positionLeft?: string | number
  positionRight?: string | number
  isFixedLeftLast?: boolean
  isFixedRightFirst?: boolean
  render?: (record: any) => any
}

interface selectedRow {
  selected: boolean
  row: any
  index: number
}

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  dataSource: any[]
  columns: column[]
  defaultSelectedRowKeys?: ReactText[]
  defaultSortOrder?: 'ascend' | 'descend'
  scroll?: {
    x: number
    y: number
  }
  onSelectChange?: (
    selected: boolean,
    selectedRowKeys: ReactText[],
    selectedRows: selectedRow[],
    record: any,
  ) => any
}

const Table: React.SFC<TableProps> = (props) => {
  const {
    dataSource,
    columns,
    defaultSelectedRowKeys,
    onSelectChange,
    defaultSortOrder,
    scroll,
  } = props

  const [copyDataSource, setCopyDataSource] = useState<any[]>([])
  const fixedLeftIndex = useRef<number[]>([])
  const fixedRightIndex = useRef<number[]>([])
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [showLeftShadow, setShowLeftShadow] = useState(false)
  const [showRightShadow, setShowRightShadow] = useState(true)

  const [copyColumns, setCopyColumns] = useState<column[]>(() => {
    let _colums = JSON.parse(JSON.stringify(columns))
    columns.forEach((v, i) => {
      if (v.sorter) {
        _colums[i].sorter = v.sorter
      }
      if (v.render) {
        _colums[i].render = v.render
      }
    })
    return _colums
  })

  const [sortOrder, setSortOrder] = useState<string>(() => {
    return defaultSortOrder ? defaultSortOrder : ''
  })

  const [selectedRowKeys, setSelectedRowKeys] = useState(() => {
    if (defaultSelectedRowKeys) {
      return defaultSelectedRowKeys
    } else {
      return []
    }
  })

  const [selectedRows, setSelectedRows] = useState(() => {
    if (defaultSelectedRowKeys) {
      return copyDataSource.filter((v) => selectedRowKeys.includes(v.key))
    } else {
      return []
    }
  })

  const selectedRowKeysChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: any,
    index: number,
  ) => {
    let _selectedRowKeys = [...selectedRowKeys]
    let _selectedRows = [...selectedRows]
    if (!selectedRowKeys.includes(item.key)) {
      _selectedRowKeys.push(item.key)
      _selectedRows.push(item)
    } else {
      _selectedRowKeys = _selectedRowKeys.filter((v) => v !== item.key)
      _selectedRows = _selectedRows.filter((v) => v.key !== item.key)
    }
    setSelectedRowKeys(_selectedRowKeys)
    setSelectedRows(_selectedRows)
    onSelectChange &&
      onSelectChange(
        e.currentTarget.checked,
        _selectedRowKeys,
        _selectedRows,
        item,
      )
  }

  const onSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      let keys: ReactText[] = []
      let rows: any = []
      copyDataSource.forEach((v) => {
        keys.push(v.key)
        if (!selectedRowKeys.includes(v.key)) {
          rows.push(v)
        }
      })
      setSelectedRowKeys(keys)
      setSelectedRows(rows)
      onSelectChange &&
        onSelectChange(e.currentTarget.checked, keys, copyDataSource, rows)
    } else {
      setSelectedRowKeys([])
      setSelectedRows([])
      onSelectChange && onSelectChange(e.currentTarget.checked, [], [], [])
    }
  }

  const handleOrder = (fn: any) => {
    let _copy = JSON.parse(JSON.stringify(copyDataSource)).sort(fn)
    setCopyDataSource(_copy)
    setSortOrder('ascend')
    if (sortOrder === 'ascend' || !sortOrder) {
      setCopyDataSource(_copy)
      setSortOrder('descend')
    } else {
      setCopyDataSource(_copy.reverse())
      setSortOrder('ascend')
    }
  }

  useEffect(() => {
    if (
      selectedRowKeys.length > 0 &&
      selectedRowKeys.length < copyDataSource.length
    ) {
      inputRef.current && (inputRef.current.indeterminate = true)
    } else {
      inputRef.current && (inputRef.current.indeterminate = false)
    }
  }, [selectedRowKeys])

  // 左右列固定 表头
  useEffect(() => {
    let left: column[] = []
    let center: column[] = []
    let right: column[] = []
    let offsetLeft = 50
    let offsetRight = 0
    let _fixedLeftIndex: number[] = []
    let _fixedRightIndex: number[] = []
    copyColumns.forEach((v, i) => {
      if (v.fixed === 'left') {
        left.push(v)
        _fixedLeftIndex.push(i)
      } else if (v.fixed === 'right') {
        right.push(v)
        _fixedRightIndex.push(i)
      } else {
        center.push(v)
      }
    })
    fixedLeftIndex.current = _fixedLeftIndex
    fixedRightIndex.current = _fixedRightIndex
    left.forEach((v) => {
      v.positionLeft = offsetLeft
      if (v.width) {
        offsetLeft = offsetLeft + v.width
      }
    })
    right.reverse().forEach((v, i) => {
      v.positionRight = offsetRight
      if (v.width) {
        offsetRight = offsetRight + v.width
      }
      if (i === 0) {
        right[i].positionRight = '0'
      }
    })
    // 左边固定最后一列和右边固定第一列
    left.length >= 1 && (left[left.length - 1].isFixedLeftLast = true)
    right.length >= 1 && (right[right.length - 1].isFixedRightFirst = true)
    setCopyColumns([...left, ...center, ...right.reverse()])
  }, [])

  // 左右列固定 表数据
  useEffect(() => {
    let left: any[] = []
    let center: any[] = []
    let right: any[] = []
    let data: any[] = JSON.parse(JSON.stringify(dataSource))
    data = data.map((item) => {
      let temp = {}
      Object.entries(item).forEach((v, i) => {
        if (fixedLeftIndex.current.includes(i)) {
          left.push(v)
        } else if (fixedRightIndex.current.includes(i)) {
          right.push(v)
        } else {
          center.push(v)
        }
      })
      left.forEach((v) => {
        //@ts-ignore
        temp[v[0]] = v[1]
      })
      center.forEach((v) => {
        //@ts-ignore
        temp[v[0]] = v[1]
      })
      right.forEach((v) => {
        //@ts-ignore
        temp[v[0]] = v[1]
      })
      return temp
    })
    setCopyDataSource(data)
  }, [dataSource])

  // 监听左右滚动，控制间隔阴影的显示
  const onScrollEvent = () => {
    let tableContainerWidth = Math.round(
      tableContainerRef.current?.getBoundingClientRect().width || 0,
    )
    let scrollOffsetLeft = tableContainerRef.current?.scrollLeft
    if (scrollOffsetLeft === 0) {
      setShowLeftShadow(false)
      return
    }
    if (scrollOffsetLeft === (scroll?.x || 0) - tableContainerWidth) {
      setShowRightShadow(false)
      return
    }
    setShowLeftShadow(true)
    setShowRightShadow(true)
  }

  const getCommonStyle = (item: column) => {
    return {
      width: (item.width && item.width.toString() + 'px') || '',
      position: 'sticky',
      [item.fixed === 'left' ? 'left' : 'right']:
        item.fixed === 'left'
          ? (item.positionLeft && item.positionLeft.toString() + 'px') || ''
          : (item.positionRight && item.positionRight.toString() + 'px') || '',
    }
  }

  const getThStyle = (item: column) => {
    return {
      ...getCommonStyle(item),
      zIndex: item.fixed ? 10 : 5,
      top: '0px',
    } as React.CSSProperties
  }

  const getTdStyle = (item: column) => {
    return {
      ...getCommonStyle(item),
      zIndex: item.fixed ? 2 : 1,
    } as React.CSSProperties
  }

  return (
    <div className="r-table-wrapper">
      <div
        ref={tableContainerRef}
        style={{ overflow: 'scroll', maxHeight: scroll?.y + 'px' || '300px' }}
        onScrollCapture={onScrollEvent}
      >
        <table
          className="r-table"
          style={{ width: scroll?.x + 'px' || '1000px' }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: '50px',
                  position: 'sticky',
                  left: '0px',
                  top: '0px',
                  zIndex: 10,
                }}
              >
                <input
                  type="checkbox"
                  onChange={onSelectAll}
                  ref={inputRef}
                  checked={selectedRowKeys.length === copyDataSource.length}
                />
              </th>
              {copyColumns.map((column) => (
                <th
                  className={combineClass(
                    column.isFixedLeftLast && showLeftShadow
                      ? 'r-table-cell-left-last r-table-cell-left-shadow'
                      : '',
                    column.isFixedRightFirst && showRightShadow
                      ? 'r-table-cell-right-first r-table-cell-right-shadow'
                      : '',
                  )}
                  key={column.field}
                  style={getThStyle(column)}
                >
                  <div className="r-table-action">
                    {column.text}
                    {column.sorter ? (
                      <span
                        onClick={() => handleOrder(column.sorter)}
                        className="r-table-action-sortable"
                      >
                        <Icon
                          name="triangleupfill"
                          size="10px"
                          color={sortOrder === 'ascend' ? '#3863d6' : '#bfbfbf'}
                        />
                        <Icon
                          name="triangledownfill"
                          size="10px"
                          color={
                            sortOrder === 'descend' ? '#3863d6' : '#bfbfbf'
                          }
                        />
                      </span>
                    ) : null}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {copyDataSource.map((item, index) => (
              <tr key={index}>
                <td style={{ width: '50px', position: 'sticky', left: '0px' }}>
                  <input
                    type="checkbox"
                    onChange={(e) => selectedRowKeysChange(e, item, index)}
                    checked={
                      selectedRowKeys &&
                      //@ts-ignore
                      selectedRowKeys.includes(item.key)
                    }
                  />
                </td>
                {Object.keys(item).map((k, i) => (
                  <td
                    className={combineClass(
                      copyColumns[i].isFixedLeftLast && showLeftShadow
                        ? 'r-table-cell-left-last r-table-cell-left-shadow'
                        : '',
                      copyColumns[i].isFixedRightFirst && showRightShadow
                        ? 'r-table-cell-right-first r-table-cell-right-shadow'
                        : '',
                    )}
                    style={getTdStyle(copyColumns[i])}
                    key={k}
                  >
                    {item[k]}
                  </td>
                ))}
                {copyColumns[copyColumns.length - 1].render ? (
                  <td
                    style={{
                      width: '50px',
                      position: 'sticky',
                      right: '0px',
                      top: '0px',
                      zIndex: 2,
                    }}
                  >
                    {copyColumns[copyColumns.length - 1].render!(item)}
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

Table.displayName = 'Table'
export default Table
