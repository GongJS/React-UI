# API

|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| content | 内容 |  string \| ReactNode   | -  | 是 |
| duration| 自动关闭的延时时长 |  number   | 3 单位：秒  | 否 |
| top| 消息距离顶部的位置 |  number   | 30 单位：px  | 否 |
| showClose | 显示关闭按钮 |  boolean   | false   | 否 |
| onClose | 消息关闭后的回调 | () => any   | - | 否 |