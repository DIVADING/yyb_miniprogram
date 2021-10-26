const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
   style: true,
  }),
 addLessLoader({
  javascriptEnabled: true,
   modifyVars: { 
    '@primary-color':'#EF5D73',
    '@menu-item-color': '#fff',
    '@menu-bg': '#f05d73', //导航栏背景
    '@modal-header-bg': ' #f05d73', //弹窗
    '@modal-header-title-font-size': '20px', //弹窗标题大小
    '@modal-close-color': 'white', //弹窗关闭键颜色
    '@modal-heading-color': 'white', //弹窗标题颜色
    '@pagination-item-bg-active': '#f05d73', //翻页选中时颜色
    },
 }),
);