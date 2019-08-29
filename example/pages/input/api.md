# API
## Input

|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| value    | 输入框当前值 |  string   | -     | 否 |
| defaultValue   | 输入框默认值 |  string   | -   | 否 |
| clearable   | 是否可清空 |  boolean   | false   | 否 |
| placeholder   | 原生属性 |  string   | - | 否 |
| addonBefore    | 前置标签 |  string \| ReactNode   | -  | 否 |
| addonAfter    | 后置标签 |  string \| ReactNode   | -  | 否 |
| preIcon   | 前缀Icon |  string   | -   | 否 |
| sufIcon  | 后缀Icon |  string   | -   | 否 |
| readOnly   | 只读状态 |  boolean   | false | 否 |
| disabled    | 禁用状态 |  boolean   | false  | 否 |
| onChange   | 值改变时的回调 |  React.ChangeEventHandler   | -   | 否 |
| onFocus   | 获取焦点的回调 |  React.FocusEventHandler   | -   | 否 |
| onBlur   | 失去焦点时的回调 |  React.FocusEventHandler   | -   | 否 |
| className   | input类名 |  string   | - | 否 |
| style    | input样式 |  React.CSSProperties | -  | 是 |
| wrapperClassName   | 外层wrapper类名 |  string   | - | 否 |
| wrapperStyle    | 外层wrapper样式 |  React.CSSProperties | -  | 是 |

## Search
| value    | 输入框当前值 |  string   | -     | 否 |
| defaultValue   | 输入框默认值 |  string   | -   | 否 |
| placeholder   | 原生属性 |  string   | - | 否 |
| autosize    | 自适应高度 |  boolean   | false  | 否 |
| onChange   | 值改变时的回调 |  (value) => any  | -   | 否 |
| className   | textarea类名 |  string   | - | 否 |
| style    | textarea样式 |  React.CSSProperties | -  | 是 |
