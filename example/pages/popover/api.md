# API

|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| content    | 浮层内容 |  string \| React.ReactNode | - | 否 |
| trigger   | 触发方式  |  'hover' \| 'click'  | 'hover' |  否  |
| position  | 浮层的相对位置  |  'top' \| 'left' \| 'right' \| 'bottom'   | 'top'  | 否 |
| onVisibleChange  | 浮层显隐状态改变时的回调  |  (visible: boolean) => any  | -  | 否 |
| className | 自定义 content 内容类名 |  string   | -   | 否 |
| wrapperClassName | 自定义 popover 容器类名 |  string   | -   | 否 |
| style | 自定义 content 内容样式 |  React.CSSProperties  | -   | 否 |
| wrapperStyle | 自定义 popover 容器样式 |  React.CSSProperties  | -   | 否 |
