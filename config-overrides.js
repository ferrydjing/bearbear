const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')
const paths = require('react-scripts/config/paths')
paths.appBuild = path.join(path.dirname(paths.appBuild), 'docs')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === 'production') {
    // 关闭sourceMap
    config.devtool = false
  }
  return config
}

module.exports = override(
  addWebpackAlias({
    '@': resolve('src'),
    _c: resolve('src/components')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    style: 'css'
  }),
  addCustomize()
)
