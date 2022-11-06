import routerList from './data'
export default [
  {
    url: "/api/login",
    method: "post",
    response: ({ body  }:any) => {
      const { userName,password } = body || {};
      if(userName == 'admin'&& password == '123' ){
        return {
          code: 200,
          success: true,
          message: 'success',
          data: {
            access_token: Math.floor(Math.random() * 10) + 1 + 'cereson',
          }
        }
      }else{
        return {
          code: 0,
          success: false,
          message: '用户名错误或密码错误',
        }
      }
    }
  },
  {
    url: "/api/user/userInfo",
    method: "get",
    response: () => {
      return {
        code: 200,
        success: true,
        data: {
          role: ['admin', 'editor'],
        }
      }
    }
  },
  {
    url: "/api/user/getRouter",
    method: "get",
    response: () => {
      return {
        code: 200,
        success: true,
        data: routerList
      }
    }
  }
]