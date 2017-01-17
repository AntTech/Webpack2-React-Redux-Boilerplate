# SHOWME react相关技术大杂烩

## 开发前思考
首先，我们要理清要开发的应用最终长什么样子，脑海里面构建整一个APP的效果图，比如这里我们要做一个应用，它有一下功能：
1. 应用有头部，侧边导航栏，内容展示区
2. 侧边导航栏有以下功能：
    1. Home：主页展示应用的功能介绍，README.md文件的内容展示，支持MARKDOME语法转义输出
    2. Reddit: 动态抓取技术文章并展示
    3. Todo: 经典Todo的应用
    4. Counter: 计数器，double相加，异步相加，基数相加等功能
    5. GitHubFinder: github用户查找资料并展示，小应用
    6. About: 关于开发作者信息的展示，留言功能
3. 功能要使用antdUI，同意前端展示效果

好了，有了以上的需求，我们就可以开始动手进行开发了，首先有一点要注意的，无论是主页，还是每个内容页，
切换的时候都要保留上一次的操作状态，所以必须有一个状态机APP把状态下发到每个子功能，同时每个子页面都有头部和侧边栏，
所以把头部和侧边栏放在公用组件是比较合适的，同时APP状态机应该包含头部和侧边栏

## 开发实战
### 项目结构
项目解构使用标准的react-redux-router
````javascript
src
|-showme
  |-actions // actions
  |-components // 界面组件
  |-constants // 常量类 
  |-containers // 界面容器
  |-reducers // reducers
  |-routes // 路由
  |-stores // stores
  app.client.js // 客户端渲染主入口
  app.ssr.js // 服务端渲染主入口
````

### 开始开发
思考，最小的页面展示只需要一个APP母模板，包含一个Header,SiderBar
react-redux-router-immutable的标准写组件流程是这样的：

component -> actions -> container -> reducer -> router

开始APP母模板的开发，而APP组件又包含Header,SiderBar，所以在组件components中的结构如下：
````javascript
components
  |-App
  |--Header
  |---Header.js
  |---index.js
  |--SiderBar
  |---SiderBar.js
  |---index.js
  |-App.js
  |-index.js
````
Header.js 代码如下：
