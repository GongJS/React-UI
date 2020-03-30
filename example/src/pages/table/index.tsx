import React, { Fragment, useState, ReactText } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeCard from '../../components/code-card'
import Table from '@components/table'

interface selectedRow {
  selected: boolean
  row: any
  index: number
}
export default () => {
  const columns = [
    { text: '序号', field: 'key' },
    { text: '姓名', field: 'name' },
    {
      text: '分数',
      field: 'score',
      sorter: (a: any, b: any) => a.score - b.score,
    },
  ]
  const dataSource = [
    { key: 1, name: '小明', score: 100 },
    { key: 2, name: '小张', score: 69 },
    { key: 3, name: '小刚', score: 95 },
    { key: 4, name: '小李', score: 55 },
  ]
  const defaultSelectedRowKeys = [1]
  const onSelectChange = (
    selected: boolean,
    selectedRowKeys: ReactText[],
    selectedRows: selectedRow[],
    record: any,
  ) => {
    console.log(selected, selectedRowKeys, selectedRows, record)
  }

  return (
    <Fragment>
      <ReactMarkdown
        source={require('!!raw-loader!./table.md').default}
        className="md"
      />
      <CodeCard
        title="基本用法"
        summary="最基本的用法,展示数据。"
        code={` 
      <DatePicker />`}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          defaultSelectedRowKeys={defaultSelectedRowKeys}
          onSelectChange={onSelectChange}
        />
      </CodeCard>
      <ReactMarkdown
        source={require('!!raw-loader!./api.md').default}
        className="md"
      />
    </Fragment>
  )
}
