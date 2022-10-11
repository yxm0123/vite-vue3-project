import { MockMethod } from 'vite-plugin-mock';
export default [
  // mock模拟登录接口
  {
    url: "/api/login",
    method: "post",
    response: ({ body  }:any) => {
      const { userName } = body || {};
      if(userName == 'admin'){
        return {
          code: 200,
          success: true,
          message: 'success',
          data: {
            access_token: Math.floor(Math.random() * 10) + 1 + 'cereson'
          }
        }
      }else{
        return {
          code: 0,
          success: false,
          message: '用户名错误',
        }
      }
    }
  }
]as MockMethod[];