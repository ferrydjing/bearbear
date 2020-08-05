const { toLower } = require('lodash')

const _ferrydjing = {
  log: (...msg) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(...msg)
    }
  },
  determineType(obj, type) {
    const map = {
      '[object String]': 'string',
      '[object Number]': 'number',
      '[object Boolean]': 'boolean',
      '[object Symbol]': 'symbol',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Function]': 'function',
      '[object Date]': 'date',
      '[object Array]': 'array',
      '[object RegExp]': 'regexp',
      '[object Error]': 'error',
      '[object HTMLDocument]': 'document',
      '[object global]': 'window',
      '[object Object]': 'object'
    }
    const res = map[Object.prototype.toString.call(obj)]
    if (type && map[Object.prototype.toString.call(obj)] === 'string') {
      if (res === toLower(type)) {
        return true
      } else {
        return false
      }
    }
    return res
  },
  isEmpty(obj) {
    if (this.determineType(obj) === 'array' && obj.length === 0) {
      return true
    } else if (
      this.determineType(obj) === 'object' &&
      Object.keys(obj).length === 0
    ) {
      return true
    } else {
      return false
    }
  }
}

;(function (win, doc, Object) {
  win._ferrydjing = _ferrydjing
})(window, document, Object)

export default _ferrydjing
