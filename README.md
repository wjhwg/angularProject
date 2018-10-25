# MyAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 项目引入Jquery 和 Boostrap库

1. 安装jquery库 npm install jquery --save  
2. 安装Bootstrap库 npm install bootstrap --save
3. 打开目录下的 .angular-cli.json文件，在styles和scripts中添加上代码如下
    "styles": [
      "styles.css",
      "./node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
      "scripts": [
      "./node_modules/jquery/dist/jquery.min.js",
      "./node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
4. 最后一步，我们为typeScript添加上类型申明库。

    // 添加这个是为了让typeScript认识$符号
    npm install @types/jquery --save-dev

    // 添加上bootstrap的申明
    npm install @types/bootstrap --save-dev



