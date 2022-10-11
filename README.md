# Vue3 + TypeScript + Vite
 - 本项目是使用vue3+Vite+TS搭建的后台管理系统，项目中引用的ui是element-plus
 - 使用mock模拟接口
 - 国际化
### 1、安装依赖

```
nmp install 或者 nmp install
```
### 2、启动项目
```
npm dev 启动项目
```
### 3、打包项目
```
npm build 启动项目
```
### 4、目录
```
  publish
  |--index.html
  |--favicon.ico
  src                                  源码目录
  |-- api                              所有api接口
  |   |--my-dashboard                          dashboard模块名
  |   |--|--index.ts                           dashboard模块API方法输出文件
  |   |--|--urls.ts                            dashboard模块url输出文件
  |   |index.ts                                api模块方法导出
  |-- assets                           静态资源，images, icons, styles等
  |-- components                       公用组件
  |-- language                         国际化翻译
  |-- mock                             模拟数据，临时存放
  |-- pubLayout                        侧边菜单
  |-- router                           路由，统一管理
  |   |--index.ts                      路由输出文件
  |-- store                            vuex, 统一管理
  |-- style                            全局的样式
  |-- utils                            全局方法
  |-- views                            视图目录
  |-- APP.vue                          项目入口文件
  |-- main.ts                          项目的核心入口文件
  |-- permission.ts                    路由权限设置
  |-- vite-env.d.ts                    typescript适配定义文件
  |package.json                        依赖文件
  |README.md                           项目说明或备注文件
  |tsconfig.json                       typescript配置
  |vite.config.ts                      全局配置，方便管理 
```