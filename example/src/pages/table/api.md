# API

| 属性           | 说明                                         | 类型                                                  | 默认值 | 是否必须 |
| -------------- | -------------------------------------------- | ----------------------------------------------------- | ------ | -------- |
| dataSource     | 数据数组                                     | any[]                                                 | -      | 否       |
| columns        | 表格列的配置描述                             | column[]                                              | -      | 否       |
| onSelectChange | 用户手动选择/取消选择某行的回调              | Function(nativeEvent, record, selected, selectedRows) | -      | 否       |
| scroll         | 触发滚动的条件                               | {x:number, y:number}                                  | -      | 否       |
| sorter         | 排序函数，本地排序使用一个函数               | Function                                              | -      | 否       |
| fixed          | 列是否固定，'left' 'right'                   | 'left' \| 'right'                                     | -      | 否       |
| width          | 列宽度                                       | number                                                | -      | 否       |
| render         | 生成复杂数据的渲染函数，参数分别为当前行的值 | Function(record) {}                                   | -      | 否       |
