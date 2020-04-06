import React, { useState, ReactText } from 'react'
import './table.scss'

interface Column {
  text: string
  field: string
}

interface SelectedRow {
  selected: boolean
  row: any
  index: number
}
interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  dataSource: any[]
  columns: Column[]
  defaultSelectedRowKeys?: ReactText[]
  onSelectChange?: (
    selected: boolean,
    selectedRowKeys: ReactText[],
    selectedRows: SelectedRow[],
    record: any,
  ) => any
}

const Table: React.FC<TableProps> = props => {
  const { dataSource, columns, defaultSelectedRowKeys, onSelectChange } = props
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
  const [isAllSelected, serIsAllSelected] = useState('none')
  const selectedRowKeysChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: any,
    index: number,
  ) => {
    let _selectedRowKeys = [...selectedRowKeys]
    let _selectedRows = [...selectedRows]
    //@ts-ignore
    if (!selectedRowKeys.includes(item.key)) {
      _selectedRowKeys.push(item.key)
      _selectedRows.push(item)
    } else {
      console.log(333)
      _selectedRowKeys = _selectedRowKeys.filter(v => v !== item.key)
      _selectedRows = _selectedRows.filter(v => v.key !== item.key)
    }
    //@ts-ignore
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
      const keys: ReactText[] = []
      const rows: any = []
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
  return (
    <div>
      <table className="r-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={onSelectAll}
                checked={selectedRowKeys.length === dataSource.length}
              />
            </th>
            {columns.map(item => (
              <th key={item.field}>{item.text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item, index) => (
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
