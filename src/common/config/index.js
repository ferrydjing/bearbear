import { log } from '@ferrydjing/utils'

let env = process.env
let url = ''
log(env)
if (env.REACT_APP_MODE === 'test') {
  // 测试服
  url = '/api'
} else if (process.env.NODE_ENV === 'production') {
  // 正式服
  url = '/api'
} else {
  url = '/server'
}

export const baseUrl = url
