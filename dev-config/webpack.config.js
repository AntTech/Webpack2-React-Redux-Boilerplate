import path from 'path';
import validate from 'webpack-validator'; // 用于webpack配置验证
// webpack plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';

import loaders from './webpack/loaders';
import {commonPlugins, devPlugins, prodPlugins} from './webpack/plugins';
import {externals} from './webpack/utils';

// 定义统一的Application，不同的单页面会作为不同的Application
import appsConfig from './apps.config';

const {apps, devServer, library, port} = appsConfig;

// 获取命令行NODE_ENV环境变量,默认为development
const NODE_ENV = process.env.NODE_ENV || 'development';

// 判断当前是否处于开发状态下
const __DEV__ = NODE_ENV === 'development';

// 定义入口变量
let entry;

// 根据不同的环境状态设置不同的开发变量
if (__DEV__) {
  // 开发状态下的默认入口
  entry = [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://0.0.0.0:${devServer.port}`,
    'webpack/hot/only-dev-server',
    devServer.appEntrySrc
  ];
} else if (NODE_ENV === 'library') {
  // 配置依赖库性质的编译环境
  entry = [library.entry];
} else {
  entry = {
    vendors: './dev-config/vendors.js' // 存放所有的公共文件
  };
}

// 设置开发时源代码映射工具
const devTool = __DEV__ ? 'cheap-module-eval-source-map' : 'hidden-source-map';

// 基本配置
const config = {
  cache: true, // 使用缓存，提高编译速度
  entry,
  // devtool: devTool,
  // 所有的出口文件，注意，所有的包括图片等本机被放置到了dist目录下，其他文件放置到static目录下
  output: {
    path: path.join(__dirname, '../dist'), // 生成目录
    publicPath: './', // 生成的公共目录
    filename: '[name].bundle.js', // 文件名,不加chunkhash,以方便调试时使用
    sourceMapFilename: '[name].bundle.map', // 映射名
    chunkFilename: '[name].[chunkhash].chunk.js', // 块文件索引
  },
  // 配置插件
  plugins: __DEV__ ?
    // 开发环境下所需要的插件
    [].concat(commonPlugins).concat(devPlugins) :
    // 生产环境下需要添加的插件
    [].concat(commonPlugins).concat(prodPlugins),
  module: {
    loaders: [
      // loaders.jslint,
      loaders.jsx,
      loaders.style,
      loaders.assets,
      loaders.json
    ]
  },
  externals
};

// 如果当前是Library配置
if (NODE_ENV === 'library') {
  // 添加生成项的依赖库名
  config.output.library = library.libraryName;
  // 添加全局挂载名
  config.output.libraryTarget = library.libraryTarget;
  // 如果是生成环境下，将文件名加上hash
  config.output.filename = `${library.name}.library.js`;
}

// 为生产环境添加额外配置
if (NODE_ENV === 'production') {
  // 定义HTML文件入口,默认的调试文件为src/index.html
  const htmlPages = [];
  // 遍历定义好的app进行构造
  apps.forEach((app) => {
    // 判断是否加入编译
    if (app.compiled === false) {
      // 如果还未开发好,就设置为false
      return;
    }
    // 添加入口
    config.entry[app.id] = app.src;
    // 判断是否设置了HTML页面,如果设置了则添加
    if (app.indexPage) {
      // 构造HTML页面
      htmlPages.push({
        filename: `${app.id}.html`,
        // favicon: path.join(__dirname, 'assets/images/favicon.ico'),
        template: `underscore-template-loader!${app.indexPage}`, // 默认使用underscore作为模板
        inject: false, // 使用自动插入JS脚本,
        chunks: ['vendors', app.id], // 选定需要插入的chunk名,
        // 设置压缩选项
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      });
    }
  });

  // 自动创建HTML代码
  htmlPages.forEach((p) => {
    config.plugins.push(new HtmlWebpackPlugin(p));
  });
  // 如果是生成环境下，将文件名加上hash
  // config.output.filename = '[name].bundle.[hash:8].js';
  config.output.filename = '[name].bundle.js';
}

export default validate(config);
