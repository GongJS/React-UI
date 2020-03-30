import React, { useEffect, useState, ReactText, useRef } from 'react'
import Icon from '../icon'
import './table.scss'

interface column {
  text: string
  field: string
  sorter?: (a: any, b: any) => any
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
  onSelectChange?: (
    selected: boolean,
    selectedRowKeys: ReactText[],
    selectedRows: selectedRow[],
    record: any,
  ) => any
}

const Table: React.FC<TableProps> = props => {
  const {
    dataSource,
    columns,
    defaultSelectedRowKeys,
    onSelectChange,
    defaultSortOrder,
  } = props
  const [copyDataSource, setCopyDataSource] = useState<any[]>(() =>
    JSON.parse(JSON.stringify(dataSource)),
  )
  const [sortOrder, setSortOrder] = useState<string>(() => {
    return defaultSortOrder ? defaultSortOrder : ''
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedRowKeys, setSelectedRowKeys] = useState(() => {
    if (defaultSelectedRowKeys) {
      return defaultSelectedRowKeys
    } else {
      return []
    }
  })
  const [selectedRows, setSelectedRows] = useState(() => {
    if (defaultSelectedRowKeys) {
      //@ts-ignore
      return dataSource.filter(v => selectedRowKeys.includes(v.key))
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
      _selectedRowKeys = _selectedRowKeys.filter(v => v !== item.key)
      _selectedRows = _selectedRows.filter(v => v.key !== item.key)
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
      dataSource.forEach(v => {
        keys.push(v.key)
        if (!selectedRowKeys.includes(v.key)) {
          rows.push(v)
        }
      })
      setSelectedRowKeys(keys)
      setSelectedRows(rows)
      onSelectChange &&
        onSelectChange(e.currentTarget.checked, keys, dataSource, rows)
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
      selectedRowKeys.length < dataSource.length
    ) {
      inputRef.current && (inputRef.current.indeterminate = true)
    } else {
      inputRef.current && (inputRef.current.indeterminate = false)
    }
  }, [selectedRowKeys])
  return (
    <div>
      <table className="r-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={onSelectAll}
                ref={inputRef}
                checked={selectedRowKeys.length === dataSource.length}
              />
            </th>
            {columns.map(item => (
              <th key={item.field}>
                <div className="r-table-action">
                  {item.text}
                  {item.sorter ? (
                    <span
                      onClick={() => handleOrder(item.sorter)}
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
                        color={sortOrder === 'descend' ? '#3863d6' : '#bfbfbf'}
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
              <td>
                <input
                  type="checkbox"
                  onChange={e => selectedRowKeysChange(e, item, index)}
                  checked={
                    selectedRowKeys &&
                    //@ts-ignore
                    selectedRowKeys.includes(item.key)
                  }
                />
              </td>
              {Object.keys(item).map(k => (
                <td key={k}>{item[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Table.displayName = 'Table'
export default Table
