# API

## Menu
|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| mode    | 模式 |  horizontal \| vertical   | horizontal | 否 |
| selectedKey | 当前激活子选项的 key |  string   | -   | - |
| expandKeys | 当前展开子菜单的 key 数组 |  string[]   | -   | - |
| defaultSelectedKey | 默认激活子选项的 key |  string   | -   | 否 |
| defaultExpandKeys  | 默认展开子菜单的 key 数组 |  string[]   | -  | 否 |
| onSelectedChange   | 激活子选项改变时的回调 | 	(selectedKey: string) => any  | - | 否 |
| onExpandChange   | 展开子菜单改变时的回调 | (expandKeys: string[]) => any | - | 否 |

## SubMenu
|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| key    | 唯一标志 |  string   | - | 是 |

## MenuItem
|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| key    | 唯一标志 |  string   | - | 是 |