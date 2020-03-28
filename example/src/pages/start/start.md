# 快速上手

Redell-UI 致力于提供给程序员自己造轮子的乐趣。

## 安装

```bash
npm install redell-ui
yarn add redell-ui
```

## 按需加载配置

### 安装插件

```bash
yarn add babel-plugin-component -D
```

### 配置 webpack.config.js

```js
...

{
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  ...
  plugins: [
    [
      'component', {
          'libraryName': 'redell-ui',
          'styleLibrary': {
            'name': 'css',
            'base': false, // no base.css file
            'path': '[module].css'
          },
       }
    ]
  ]
}
...
```

## 开始使用

### 示例代码

```react
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'redell-ui'

ReactDOM.render(
  <div>
    <Button type="primary">主要按钮</Button>
  </div>,
  mountNode
)
```

### 展示效果
