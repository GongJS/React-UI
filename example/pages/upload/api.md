# API

|    属性    |   说明   |    类型    |  默认值  | 是否必须 |
| --------- | ------- | --------- | ------- | -------  |
| name    | 发到后台的文件参数名 |  string   | 'file' | 否 |
| multiple  | 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件 |  boolean  | false   | 否 |
| action   | 上传的地址 |  string   | - | 是 |
| fileList   | 已经上传的文件列表 |  Object[]   | [] | 否 |
| onFileChange   | 文件上传完的状态 |  (fileList) => void   | - | 否 |
| handleImgClick | 单击预览图片的回调函数；移动端单击图片，PC端单击Icon |  (url, index) => void   | - | 否 |
| upload | 暴露给父组件调用的方法，触发上传 |  uploadRef.current.upload()   | - | 否 |


`file` file 当前操作的文件对象。

```
{
    uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
    name: 'xx.png'   // 文件名
    status: 'done', // 状态有：uploading success error
 }
```


`fileList` 当前的文件列表。