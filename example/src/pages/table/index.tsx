import React, { Fragment, useState, ReactText } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeCard from '../../components/code-card'
import Table from '@components/table'
import Button from '@components//button'

interface selectedRow {
  selected: boolean
  row: any
  index: number
}
export default () => {
  const del = (record: any) => {
    data = data.filter((v) => v.key !== record.key)
    setDataSource(data)
  }
  const columns = [
    { text: '序号', field: 'key', width: 100, fixed: 'left' },
    { text: '姓名', field: 'name', width: 100, fixed: 'left' },
    {
      text: '分数',
      field: 'score',
      width: 80,
      sorter: (a: any, b: any) => a.score - b.score,
    },
    { text: '年龄', field: 'age', width: 100, fixed: 'right' },
    { text: '性别', field: 'sex', width: 100 },
    { text: '地址', field: 'address' },
    {
      text: '操作',
      field: 'action',
      fixed: 'right',
      width: 100,
      render: (record: any) => {
        return (
          <Button type="danger" onClick={() => del(record)}>
            删除
          </Button>
        )
      },
    },
  ]
  let data = [
    {
      key: 1,
      name: '小明',
      score: 100,
      age: 34,
      sex: '男',
      address: '杭州市西湖区',
    },
    {
      key: 2,
      name: '小张',
      score: 69,
      age: 24,
      sex: '男',
      address: '杭州市西湖区',
    },
    {
      key: 3,
      name: '小刚',
      score: 95,
      age: 14,
      sex: '男',
      address: '杭州市西湖区',
    },
    {
      key: 4,
      name: '小李',
      score: 55,
      age: 26,
      sex: '男',
      address: '杭州市西湖区',
    },
    {
      key: 5,
      name: '小红',
      score: 55,
      age: 26,
      sex: '女',
      address: '杭州市西湖区',
    },
    {
      key: 6,
      name: '小明',
      score: 100,
      age: 34,
      sex: '男',
      address: '杭州市西湖区',
    },
    {
      key: 7,
      name: '小张',
      score: 69,
      age: 24,
      sex: '男',
      address: '杭州市西湖区',
    },
    {
      key: 8,
      name: '小刚',
      score: 95,
      age: 14,
      sex: '男',
      address: '杭州市西湖区',
    },
    {
      key: 9,
      name: '小李',
      score: 55,
      age: 26,
      sex: '男',
      address: '杭州市西湖区',
    },
    {
      key: 10,
      name: '小红',
      score: 55,
      age: 26,
      sex: '女',
      address: '杭州市西湖区',
    },
    {
      key: 11,
      name: '小明',
      score: 100,
      age: 34,
      sex: '男',
      address: '杭州市西湖区',
    },
    {
      key: 12,
      name: '小张',
      score: 69,
      age: 24,
      sex: '男',
      address: '杭州市西湖区',
    },
    {
      key: 13,
      name: '小刚',
      score: 95,
      age: 14,
      sex: '男',
      address: '杭州市西湖区',
    },
    {
      key: 14,
      name: '小李',
      score: 55,
      age: 26,
      sex: '男',
      address: '杭州市西湖区',
    },
    {
      key: 15,
      name: '小红',
      score: 55,
      age: 26,
      sex: '女',
      address: '杭州市西湖区',
    },
  ]
  const [dataSource, setDataSource] = useState(data)
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
        title="用法"
        summary="表头固定、列固定、数据选择、数据排序、数据删除。"
        code={`
        interface selectedRow {
          selected: boolean
          row: any
          index: number
        }
        export default () => {
          const del = (record: any) => {
            data = data.filter((v) => v.key !== record.key)
            setDataSource(data)
          }
          const columns = [
            { text: '序号', field: 'key', width: 100, fixed: 'left' },
            { text: '姓名', field: 'name', width: 100, fixed: 'left' },
            {
              text: '分数',
              field: 'score',
              width: 80,
              sorter: (a: any, b: any) => a.score - b.score,
            },
            { text: '年龄', field: 'age', width: 100, fixed: 'right' },
            { text: '性别', field: 'sex', width: 100 },
            { text: '地址', field: 'address' },
            {
              text: '操作',
              field: 'action',
              fixed: 'right',
              width: 100,
              render: (record: any) => {
                return (
                  <Button type="danger" onClick={() => del(record)}>
                    删除
                  </Button>
                )
              },
            },
          ]
          let data = [
            {
              key: 1,
              name: '小明',
              score: 100,
              age: 34,
              sex: '男',
              address: '杭州市西湖区',
            },
            {
              key: 2,
              name: '小张',
              score: 69,
              age: 24,
              sex: '男',
              address: '杭州市西湖区',
            },
            {
              key: 3,
              name: '小刚',
              score: 95,
              age: 14,
              sex: '男',
              address: '杭州市西湖区',
            },
            ...
          ]
          <Table
            scroll={{ x: 1000, y: 300 }}
            dataSource={dataSource}
            columns={columns}
            defaultSelectedRowKeys={defaultSelectedRowKeys}
            onSelectChange={onSelectChange}
          />`}
      >
        <Table
          scroll={{ x: 1000, y: 300 }}
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
