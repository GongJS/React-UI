# API  
|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| visible    | 对话框是否可见 |  boolean   | false  | 否|
| title   | 标题|  string   |  提示  | 否 |
| maskClosable  | 点击蒙层是否允许关闭 |  string   | 确定   | 否 |
| okText    | 确认按钮文字 |  string   | - | 否 |
| cancelText| 取消按钮文字 |  string   | - | 否 |
| maskStyle | 遮罩样式 |  string   | - | 否 |
| style    |  Modal样式 |  string   | - | 否 |
| onCancel   | 点击遮罩层或右上角叉或取消按钮的回调 |  () => any   | - | 否 |
| onOk   |    点击确认回调 |  () => any   | - | 否 |
| afterClose   |  Modal 完全关闭后的回调 |  () => any   | - | 否 |
| footer  | 底部内容，当不需要默认底部按钮时，可以设为 footer={null} |  string\|ReactNode   | 确定取消按钮 | 否 |
| header  | 底部内容，当不需要默认底部按钮时，可以设为 footer={null} |  string\|ReactNode   | 提示 | 否 |

# options
|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| visible    | 对话框是否可见 |  boolean   | false  | 否|
| title   | 标题|  string   |  提示  | 否 |
| maskClosable  | 点击蒙层是否允许关闭 |  string   | 确定   | 否 |
| okText    | 确认按钮文字 |  string   | - | 否 |
| cancelText| 取消按钮文字 |  string   | - | 否 |
| maskStyle | 遮罩样式 |  string   | - | 否 |
| style    |  Modal样式 |  string   | - | 否 |
| onCancel   | 点击遮罩层或右上角叉或取消按钮的回调 |  () => any   | - | 否 |
| onOk   |    点击确认回调 |  () => any   | - | 否 |
| afterClose   |  Modal 完全关闭后的回调 |  () => any   | - | 否 |
| content  |  弹窗内容 |  string\|ReactNode   |  提示  | 否 |
