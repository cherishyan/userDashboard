## userDashboard
[![React](https://img.shields.io/badge/react-^15.4.0-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![Ant Design](https://img.shields.io/badge/ant--design-^2.9.3-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![dva](https://img.shields.io/badge/dva-^2.0.3-orange.svg?style=flat-square)](https://github.com/dvajs/dva)

## 特性
* 基于react,ant-design,dva,mock实现的用户管理系统

* dva加载Model和router


## TODO List

- [ ] 登录界面
- [ ] 登录用户信息
- [ ] 添加新用户mock数据
- [ ] App界面

## 过程

 [userDashboard](https://github.com/cherishyan/userDashboard) 为[dva](https://github.com/dvajs/dva)推荐的一个react+dva+antd的练手项目，也是我开始接触前端并且一边学一边写的。相关的学习资源：
 
 * [12 步 30 分钟，完成用户管理的 CURD 应用](https://github.com/sorrycc/blog/issues/18)。
之前看的github中的代码，mock数据好像不全，我补充了一下。

* [Ant design](https://ant.design/docs/react/introduce-cn)，蚂蚁金服推出的组件方案，值得推荐。

* [dva](https://github.com/dvajs/dva) 配套的脚手架

* [roadhog](https://github.com/sorrycc/roadhog)本地调试和构建工具，也是基本配套的。

(PS:  dva - D.va，roadhog-路霸，下一个工具名字是不是叫麦克雷……)

* [React.js小书](http://huziketang.com/books/react/)，写的非常不错的react入门教程，对于redux的理解很清晰


* 目前的目录结构：

```bash
.
├── mock
│   └── users.js
├── package.json
├── public
│   └── index.html
├── src
│   ├── assets
│   │   └── yay.jpg
│   ├── components
│   │   ├── Example.js
│   │   ├── Loader
│   │   └── Users
│   ├── index.css
│   ├── index.js
│   ├── models
│   │   ├── app.js
│   │   ├── example.js
│   │   ├── login.js
│   │   └── users.js
│   ├── router.js
│   ├── routes
│   │   ├── DashboardPage.js
│   │   ├── IndexPage.css
│   │   ├── IndexPage.js
│   │   ├── User.less
│   │   ├── Users.js
│   │   ├── app
│   │   └── login
│   ├── services
│   │   ├── example.js
│   │   ├── login.js
│   │   └── users.js
│   └── utils
│       └── request.js
└── userDashboard.iml
```

（TODO）

### 更新

`2017-10-20`

* 增加了App主界面，增加Login的mock和models

`2017-10-17`
* 更新dva@2.x版本，更新roadhog@1.x版本，修改router

## 开始

node_modules
```bash
npm install
```

start
```bash
npm run start
```
