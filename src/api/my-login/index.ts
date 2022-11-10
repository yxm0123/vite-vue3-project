import request from '@/utils/axios';
import * as urls from './urls';

// 登录
export const login = (data: any) =>{
  return  request({
    url: urls.login,
    method: 'post',
    data,
  });
};
// 获取用户信息
export const getUserInfos = (params?:any) =>{
  return  request({
    url: urls.getUserInfo,
    method: 'get',
    params,
  });
};
// 获取路由权限
export const getRouters = (params:any) =>{
  return  request({
    url: urls.getRouters,
    method: 'get',
    params,
  });
};