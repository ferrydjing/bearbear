# bearbear

[预览地址](https://ferrydjing.github.io/bearbear/.)

## 项目描述

基于 React 打造的后台管理系统模版

基于 React hooks、antd、 redux、 React router 等技术

css 样式基于 styled components 组件实现

### 技术栈

`React@16.13.1 + React-router-dom@5.2.0 + styled-components@5.1.1 + antd@4.3.4 + redux等`

> `Create React App` 脚手架工具

> `react-app-rewired` 项目配置工具

> `customize-cra` 项目配置工具

> `dotenv-cli` 打包区分环境工具

### 基本功能

1. - [x] 路由懒加载
2. - [x] 面包屑导航
3. - [ ] 常用 ui 展示
   - - [ ] 登录页
   - 主页面
     - - [ ] 首页
     - - [x] 按钮页
     - - [x] 图标页
   - - [x] 404

### 项目目录

```
├── config-overrides.js         # 打包配置
├── public                      # 公共目录（不参与编译）
├── src                         # 项目主目录
│   ├── App.jsx
│   ├── api
│   ├── assets                  # 静态资源
│   ├── components              # 公共组件
│   │   ├── Icon
│   │   └── page-info
│   ├── index.js                # 项目入口
│   ├── routers                 # 路由配置
│   ├── setupProxy.js           # 代理设置
│   ├── store                   # 状态管理
│   │   ├── base
│   │   ├── index.js
│   │   └── reducer.js
│   ├── utils                   # 工具方法
│   └── views                   # 页面目录

```

### 使用说明

```shell
git clone https://github.com/ferrydjing/bearbear.git

cd react-backstage

// 安装依赖
npm install // yarn

// 运行
npm start // yarn start

// 打包
npm run build // yarn build

// 打包测试服

npm run build:test // yarn build:test

```
