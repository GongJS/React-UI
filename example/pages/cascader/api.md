# API  
|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| options    | 选项数组，选项具体属性设置见 Option |  Option[]   | -  | 是|
| onSelect   | 选择完成时的回调|  (selectedOptions: option[]) => any   |  -  | 否 |
| itemClassName  | 自定义子菜单项类名 |  string   | -   | 否 |
| itemStyle    | 自定义子菜单项样式 |  React.CSSProperties   | - | 否 |
| style  |  自定义选择框样式 |  React.CSSProperties    | - | 否 |
| className |  自定义选择框类名 |  string   | - | 否 |


# Options

|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| value    | 选项的值 |  string   | -  | 是|
| label   | 标题|  string   |  --  | 是 |
| children  | 子选项数组，选项属性设置同 Option |  Option[]   | -   | 否 |
| disabled    | 禁用选项 |  boolean   | - | 否 |