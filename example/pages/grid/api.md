# API
## Row

|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| gutter    | 栅格间隔，单位：px |  number   | -         | 否 |
| className   | 自定义 Row 类名 |  string   | -   | 否 |
| style  | 自定义 Row 样式 |  React.CSSProperties   | - | 否 |

## Col
|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| span    | 栅格占位格数，设置为 0 时相当于设置 display: none |  number   | -         | 否 |
| offset    | 栅格向右偏移的格数 |  number   | -         | 否 |
| sm    | 响应式栅格，> 576px 生效，具体属性设置见 Options |  Options \| number  | -         | 否 |
| md    | 响应式栅格，> 768px 生效，具体属性设置见 Options |  Options \| number | -         | 否 |
| lg    | 响应式栅格，> 992px 生效，具体属性设置见 Options |  Options \| number | -         | 否 |
| xl    | 响应式栅格，> 1200px 生效，具体属性设置见 Options |  Options \| number | -         | 否 |
| span    | 栅格向右偏移的格数 |  number   | -         | 否 |
| className   | 自定义 Col 类名 |  string   | -   | 否 |
| style  | 自定义 Col 样式 |  React.CSSProperties   | - | 否 |

## Options
|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| span    | 栅格占位格数，设置为 0 时相当于设置 display: none |  number   | -         | 否 |
| offset    | 栅格向右偏移的格数 |  number   | -         | 否 |