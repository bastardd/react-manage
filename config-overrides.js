const {override,fixBabelImports,addLessLoader} = require('customize-cra');

module.exports = override(
    //针对antd实现按需打包：根据import来打包（使用babel-plugin-import这个工具）
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        // style:'css',//自动打包相关的antd的样式
        style:true,
    }),
    //使用less-loader对源码中的less变量进行修改，以达到修改antd主题颜色，具体参照API
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#08979D' },
    }),
)