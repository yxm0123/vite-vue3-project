import { MockMethod } from 'vite-plugin-mock';
import  dashboard from './my-dashboard';
import login from './my-login'
export default [
  // mock模拟登录接口
  ...login,
  ...dashboard
]as MockMethod[];