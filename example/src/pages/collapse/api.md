# API

## Collapse
|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| defaultSelectedKeys    | 初始化展开面板 key 的数组 |  string[]   | -  | 否 |
| expandKeys   | 当前展开面板 key 的数组 |  string[]   | -   | - |
| onChange   | 点击面板头导致展开项改变时的回调 |  (expandKeys: string[], e: React.MouseEvent) => any   | -   | - |
| accordion  | 手风琴模式 |  boolean   | false   | 否 |
| icon   | 前面板上的箭头icon类名 |  string   | ‘right' | 否 |

## CollapseItem
|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| title    | 面板头内容 |  string   | -  | 否 |
| disabled    | 禁用状态 |  boolean   | false  | 否 |