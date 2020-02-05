# 项目介绍

* [超全面详细一条龙教程！从零搭建React项目全家桶（上篇）](https://juejin.im/post/5e36b72ee51d45307546b29c)
* [超全面详细一条龙教程！从零搭建React项目全家桶（下篇）](https://juejin.im/post/5e379370f265da3e36457001)

## 目录结构

    ├─ /node_modules
    ├─ package.json
    ├─ /public
    |  ├─ favicon.ico        <-- 网页图标
    |  └─ index.html         <-- HTML页模板
    ├─ README.md
    ├─ /src
    |  ├─ /common            <-- 全局公用目录
    |  |  ├─ /fonts          <-- 字体文件目录
    |  |  ├─ /images         <-- 图片文件目录
    |  |  ├─ /js             <-- 公用js文件目录
    |  |  └─ /style          <-- 公用样式文件目录
    |  |  |  ├─ frame.css    <-- 全部公用样式（import其他css）
    |  |  |  ├─ reset.css    <-- 清零样式
    |  |  |  └─ global.css   <-- 全局公用样式
    |  ├─ /components        <-- 公共模块组件目录
    |  |  ├─ /header         <-- 头部导航模块
    |  |  |  ├─ index.js     <-- header主文件
    |  |  |  └─ header.css   <-- header样式文件
    |  |  └─ ...             <-- 其他模块
    |  ├─ /pages             <-- 页面组件目录
    |  |  ├─ /home           <-- home页目录
    |  |  |  ├─ index.js     <-- home主文件
    |  |  |  └─ home.css     <-- home样式文件
    |  |  ├─ /login          <-- login页目录
    |  |  |  ├─ index.js     <-- login主文件
    |  |  |  └─ login.css    <-- login样式文件
    |  |  └─ ...             <-- 其他页面
    |  ├─ App.js             <-- 项目主模块
    |  └─ index.js           <-- 项目入口文件
    └─ yarn.lock
