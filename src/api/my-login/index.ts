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